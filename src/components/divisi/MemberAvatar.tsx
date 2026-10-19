import Image from "next/image";
import clsx from "clsx";
import { FiUser } from "react-icons/fi";
import type { Pengurus } from "@/data/pengurus";

const sizes = {
  lg: { box: "size-36 border-8 p-1.5", icon: 40, px: 144 },
  md: { box: "size-26 border-[6px] p-1", icon: 32, px: 104 },
  sm: { box: "size-20 border-4 p-1", icon: 24, px: 80 },
};

interface MemberAvatarProps {
  person: Pengurus;
  size?: keyof typeof sizes;
  glow?: boolean;
}

// Silver outer ring + charcoal inner ring, the same badge as the BIOS logo
export default function MemberAvatar({
  person,
  size = "md",
  glow = false,
}: MemberAvatarProps) {
  const s = sizes[size];

  return (
    <div
      className={clsx(
        "shrink-0 rounded-full border-silver-300 bg-charcoal",
        s.box,
        glow && "shadow-[0_0_28px_rgb(0_255_210/0.25)]",
      )}
    >
      {person.photo ? (
        <Image
          src={person.photo}
          alt={person.name ? `Foto ${person.name}` : ""}
          width={s.px}
          height={s.px}
          className="size-full rounded-full object-cover"
        />
      ) : (
        <div className="flex size-full items-center justify-center rounded-full bg-surface text-muted">
          <FiUser aria-hidden="true" size={s.icon} />
        </div>
      )}
    </div>
  );
}
