import Image from "next/image";

type UserAvatarProps = {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
};

const DEFAULT_AVATAR = "/images/main/default-avatar.png";

export default function UserAvatar({
  src,
  alt = "Standard-Profilbild von Deutschraum",
  width = 50,
  height = 50,
}: UserAvatarProps) {
  return (
    <Image
      src={src ?? DEFAULT_AVATAR}
      alt={alt}
      width={width}
      height={height}
      className="rounded-full"
    />
  );
}
