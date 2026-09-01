import html2canvas from "html2canvas";

interface StudentData {
  name: string;
  nim: string;
  division: string;
  status: "accepted" | "rejected";
}

export class InstagramImageGenerator {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = 1080; // Instagram Story size
    this.canvas.height = 1920;
    this.ctx = this.canvas.getContext("2d")!;
  }

  async generateResultImage(studentData: StudentData): Promise<string> {
    this.ctx.clearRect(0, 0, 1080, 1920);

    const bg = this.ctx.createLinearGradient(0, 0, 0, 1920);
    bg.addColorStop(0, "#020817");
    bg.addColorStop(0.5, "#0f172a");
    bg.addColorStop(1, "#111827");
    this.ctx.fillStyle = bg;
    this.ctx.fillRect(0, 0, 1080, 1920);

    await this.drawBackgroundDecor();
    await this.drawAcceptanceMessage(studentData);
    await this.drawLogo();
    await this.drawFooter();

    return this.canvas.toDataURL("image/jpeg", 0.94);
  }

  private async drawLogo() {
    const logo = new Image();
    logo.src = "/BIOS.webp";

    await new Promise<void>((resolve) => {
      logo.onload = () => resolve();
      logo.onerror = () => resolve();
    });

    if (logo.width > 0 && logo.height > 0) {
      const logoSize = 560;
      const x = 540 - logoSize / 2;
      const y = 760;
      this.ctx.drawImage(logo, x, y, logoSize, logoSize);
    }
  }

  private async drawAcceptanceMessage(studentData: StudentData) {
    const acceptedText = `${studentData.name} anda diterima di BIOS divisi ${studentData.division || "HIMA BIOS"}`;

    this.ctx.textAlign = "center";

    this.ctx.fillStyle = "#34d399";
    this.ctx.font = "700 118px 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    this.ctx.fillText("SELAMAT!", 540, 330);

    this.ctx.fillStyle = "#f8fafc";
    this.ctx.font = "600 46px 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

    const lines = this.wrapText(acceptedText, 760);
    const lineHeight = 58;
    const startY = 410;

    lines.forEach((line, index) => {
      this.ctx.fillText(line, 540, startY + index * lineHeight);
    });
  }

  private async drawFooter() {
    this.ctx.textAlign = "center";

    this.ctx.fillStyle = "#f8fafc";
    this.ctx.font = "700 38px 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    this.ctx.fillText("Follow us @ubm_bios_ancol", 540, 1500);

    this.ctx.fillStyle = "#a7f3d0";
    this.ctx.font = "700 32px 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    this.ctx.fillText("#HIMABIOS #UBMANCOL #BIOS2026", 540, 1575);

    this.ctx.fillStyle = "#cbd5e1";
    this.ctx.font = "500 28px 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    this.ctx.fillText("himabios.ubm.vercel.app", 540, 1635);
  }

  private async drawBackgroundDecor() {
    this.ctx.fillStyle = "#0b1120";
    this.ctx.fillRect(0, 0, 1080, 1920);
  }

  private wrapText(text: string, maxWidth: number): string[] {
    const words = text.split(" ");
    const lines: string[] = [];
    let currentLine = "";

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const testWidth = this.ctx.measureText(testLine).width;

      if (testWidth > maxWidth && currentLine) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }

    if (currentLine) {
      lines.push(currentLine);
    }

    return lines;
  }

  // Helper method to draw rounded rectangles
  private roundRect(
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
  ) {
    this.ctx.beginPath();
    this.ctx.moveTo(x + radius, y);
    this.ctx.lineTo(x + width - radius, y);
    this.ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    this.ctx.lineTo(x + width, y + height - radius);
    this.ctx.quadraticCurveTo(
      x + width,
      y + height,
      x + width - radius,
      y + height,
    );
    this.ctx.lineTo(x + radius, y + height);
    this.ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    this.ctx.lineTo(x, y + radius);
    this.ctx.quadraticCurveTo(x, y, x + radius, y);
    this.ctx.closePath();
  }
}

// Alternative: Generate image from HTML element
export async function generateImageFromElement(
  element: HTMLElement,
): Promise<string> {
  const canvas = await html2canvas(element, {
    width: 1080,
    height: 1920,
    useCORS: true,
    allowTaint: true,
  });

  return canvas.toDataURL("image/jpeg", 0.9);
}

// Device detection and Instagram URL handling
export class InstagramShareHandler {
  static detectDevice(): "ios" | "android" | "desktop" {
    const userAgent = navigator.userAgent.toLowerCase();

    if (/iphone|ipad|ipod/.test(userAgent)) {
      return "ios";
    } else if (/android/.test(userAgent)) {
      return "android";
    } else {
      return "desktop";
    }
  }

  static async shareToInstagram(
    imageDataUrl: string,
    studentData: StudentData,
  ): Promise<void> {
    const device = this.detectDevice();

    // Convert data URL to blob
    const response = await fetch(imageDataUrl);
    const blob = await response.blob();
    const file = new File([blob], "hima-bios-result.jpg", {
      type: "image/jpeg",
    });

    const shareText = `🎉 ${
      studentData.status === "accepted" ? "DITERIMA" : "TETAP SEMANGAT"
    } DI HIMA BIOS UBM! 🎉

@ubm_bios_ancol #HIMABIOS #UBMANCOL #BIOS2025`;

    try {
      // Try Web Share API first (works on mobile browsers)
      if (
        navigator.share &&
        navigator.canShare &&
        navigator.canShare({ files: [file] })
      ) {
        await navigator.share({
          title: "Hasil Seleksi HIMA BIOS",
          text: shareText,
          files: [file],
        });
        return;
      }

      // Fallback to URL schemes
      switch (device) {
        case "ios":
          // Try Instagram app first
          const instagramUrl = `instagram://camera`;

          // Copy image and text to clipboard
          if (navigator.clipboard) {
            await navigator.clipboard.writeText(shareText);
          }

          // Try to open Instagram
          window.open(instagramUrl, "_blank");

          // Show instructions
          setTimeout(() => {
            alert(
              `📱 Langkah untuk share ke Instagram:\n\n1. Teks sudah disalin ke clipboard\n2. Simpan gambar yang akan diunduh\n3. Buka Instagram Stories\n4. Upload gambar\n5. Paste teks dari clipboard\n\nJika Instagram belum terinstall, download dari App Store.`,
            );

            // Trigger image download
            this.downloadImage(imageDataUrl, "hima-bios-result.jpg");
          }, 1000);
          break;

        case "android":
          // Android Instagram intent
          const androidInstagramUrl = `intent://camera#Intent;package=com.instagram.android;scheme=instagram;end`;

          // Copy text to clipboard
          if (navigator.clipboard) {
            await navigator.clipboard.writeText(shareText);
          }

          // Try to open Instagram
          window.open(androidInstagramUrl, "_blank");

          setTimeout(() => {
            alert(
              `📱 Langkah untuk share ke Instagram:\n\n1. Teks sudah disalin ke clipboard\n2. Simpan gambar yang akan diunduh\n3. Buka Instagram Stories\n4. Upload gambar\n5. Paste teks dari clipboard\n\nJika Instagram belum terinstall, download dari Play Store.`,
            );

            // Trigger image download
            this.downloadImage(imageDataUrl, "hima-bios-result.jpg");
          }, 1000);
          break;

        case "desktop":
        default:
          // Desktop: Copy text and download image with instructions
          if (navigator.clipboard) {
            await navigator.clipboard.writeText(shareText);
          }

          alert(
            `💻 Langkah untuk share ke Instagram:\n\n1. Teks sudah disalin ke clipboard\n2. Gambar akan diunduh otomatis\n3. Buka Instagram di mobile/web\n4. Upload gambar ke Stories\n5. Paste teks dari clipboard atau ketik manual\n\nUntuk pengalaman terbaik, gunakan Instagram mobile app.`,
          );

          // Download image
          this.downloadImage(imageDataUrl, "hima-bios-result.jpg");
          break;
      }
    } catch (error) {
      console.error("Error sharing to Instagram:", error);

      // Final fallback: download image and copy text
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareText);
      }

      alert(
        `📱 Terjadi kendala dengan sharing otomatis.\n\n✅ Teks sudah disalin ke clipboard\n⬇️ Gambar akan diunduh\n\nSilakan upload manual ke Instagram Stories dan paste teks yang sudah disalin.`,
      );

      this.downloadImage(imageDataUrl, "hima-bios-result.jpg");
    }
  }

  private static downloadImage(dataUrl: string, filename: string): void {
    const link = document.createElement("a");
    link.download = filename;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
