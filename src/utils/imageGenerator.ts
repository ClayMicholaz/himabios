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
    // Clear canvas with gradient background
    const gradient = this.ctx.createLinearGradient(0, 0, 0, 1920);

    if (studentData.status === "accepted") {
      gradient.addColorStop(0, "#f0fdf4"); // green-50
      gradient.addColorStop(1, "#dcfce7"); // green-100
    } else {
      gradient.addColorStop(0, "#fff7ed"); // orange-50
      gradient.addColorStop(1, "#ffedd5"); // orange-100
    }

    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, 1080, 1920);

    // Add HIMA BIOS logo/header
    await this.drawHeader();

    // Add status emoji and text
    await this.drawStatusSection(studentData);

    // Add student information
    await this.drawStudentInfo(studentData);

    // Add footer with Instagram tag
    await this.drawFooter();

    // Add decorative elements
    await this.drawDecorations(studentData.status);

    return this.canvas.toDataURL("image/jpeg", 0.9);
  }

  private async drawHeader() {
    // HIMA BIOS Title
    this.ctx.fillStyle = "#1e40af"; // blue-800
    this.ctx.font = "bold 72px Arial, sans-serif";
    this.ctx.textAlign = "center";
    this.ctx.fillText("HIMA BIOS", 540, 200);

    // UBM Subtitle
    this.ctx.fillStyle = "#374151"; // gray-700
    this.ctx.font = "48px Arial, sans-serif";
    this.ctx.fillText("Universitas Bunda Mulia", 540, 280);

    // Pengumuman text
    this.ctx.fillStyle = "#6b7280"; // gray-500
    this.ctx.font = "36px Arial, sans-serif";
    this.ctx.fillText("PENGUMUMAN SELEKSI", 540, 340);
  }

  private async drawStatusSection(studentData: StudentData) {
    const isAccepted = studentData.status === "accepted";

    // Status emoji
    this.ctx.font = "160px Arial";
    this.ctx.textAlign = "center";
    this.ctx.fillText(isAccepted ? "🎉" : "🌟", 540, 520);

    // Status title
    this.ctx.fillStyle = isAccepted ? "#15803d" : "#ea580c"; // green-700 : orange-600
    this.ctx.font = "bold 64px Arial, sans-serif";
    this.ctx.fillText(isAccepted ? "SELAMAT!" : "TETAP SEMANGAT!", 540, 620);

    // Status subtitle
    this.ctx.fillStyle = isAccepted ? "#16a34a" : "#fb923c"; // green-600 : orange-400
    this.ctx.font = "42px Arial, sans-serif";
    this.ctx.fillText(
      isAccepted ? "Anda telah diterima!" : "Terus berkarya dan berkembang!",
      540,
      680
    );
  }

  private async drawStudentInfo(studentData: StudentData) {
    const startY = 800;
    const lineHeight = 80;
    let currentY = startY;

    // Draw info box background
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
    this.roundRect(140, startY - 40, 800, 300, 20);
    this.ctx.fill();

    // Student info
    const info = [
      { label: "Nama:", value: studentData.name },
      { label: "NIM:", value: studentData.nim },
    ];

    if (studentData.division) {
      info.push({ label: "Divisi:", value: studentData.division });
    }

    info.forEach((item) => {
      // Label
      this.ctx.fillStyle = "#374151"; // gray-700
      this.ctx.font = "bold 36px Arial, sans-serif";
      this.ctx.textAlign = "left";
      this.ctx.fillText(item.label, 180, currentY);

      // Value
      this.ctx.fillStyle = "#111827"; // gray-900
      this.ctx.font = "36px Arial, sans-serif";
      this.ctx.fillText(item.value, 180, currentY + 40);

      currentY += lineHeight;
    });
  }

  private async drawFooter() {
    // Instagram tag
    this.ctx.fillStyle = "#6366f1"; // indigo-500
    this.ctx.font = "bold 42px Arial, sans-serif";
    this.ctx.textAlign = "center";
    this.ctx.fillText("Follow us @ubm_bios_ancol", 540, 1400);

    // Hashtags
    this.ctx.fillStyle = "#8b5cf6"; // violet-500
    this.ctx.font = "32px Arial, sans-serif";
    this.ctx.fillText("#HIMABIOS #UBMANCOL #BIOS2025", 540, 1460);

    // Website
    this.ctx.fillStyle = "#64748b"; // slate-500
    this.ctx.font = "28px Arial, sans-serif";
    this.ctx.fillText("himabios.ubm.ac.id", 540, 1500);
  }

  private async drawDecorations(status: string) {
    const isAccepted = status === "accepted";

    // Add decorative shapes
    this.ctx.fillStyle = isAccepted
      ? "rgba(34, 197, 94, 0.1)" // green with opacity
      : "rgba(249, 115, 22, 0.1)"; // orange with opacity

    // Top decoration
    this.ctx.beginPath();
    this.ctx.arc(100, 100, 80, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.arc(980, 150, 60, 0, Math.PI * 2);
    this.ctx.fill();

    // Bottom decoration
    this.ctx.beginPath();
    this.ctx.arc(150, 1700, 100, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.arc(930, 1750, 70, 0, Math.PI * 2);
    this.ctx.fill();
  }

  // Helper method to draw rounded rectangles
  private roundRect(
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number
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
      y + height
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
  element: HTMLElement
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
    studentData: StudentData
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
              `📱 Langkah untuk share ke Instagram:\n\n1. Teks sudah disalin ke clipboard\n2. Simpan gambar yang akan diunduh\n3. Buka Instagram Stories\n4. Upload gambar\n5. Paste teks dari clipboard\n\nJika Instagram belum terinstall, download dari App Store.`
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
              `📱 Langkah untuk share ke Instagram:\n\n1. Teks sudah disalin ke clipboard\n2. Simpan gambar yang akan diunduh\n3. Buka Instagram Stories\n4. Upload gambar\n5. Paste teks dari clipboard\n\nJika Instagram belum terinstall, download dari Play Store.`
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
            `💻 Langkah untuk share ke Instagram:\n\n1. Teks sudah disalin ke clipboard\n2. Gambar akan diunduh otomatis\n3. Buka Instagram di mobile/web\n4. Upload gambar ke Stories\n5. Paste teks dari clipboard atau ketik manual\n\nUntuk pengalaman terbaik, gunakan Instagram mobile app.`
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
        `📱 Terjadi kendala dengan sharing otomatis.\n\n✅ Teks sudah disalin ke clipboard\n⬇️ Gambar akan diunduh\n\nSilakan upload manual ke Instagram Stories dan paste teks yang sudah disalin.`
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
