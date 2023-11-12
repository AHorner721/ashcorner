import Image from "next/image";
import profile from "../../public/profile.jpg";
import styles from "./ProfileImage.module.css";

export default function ProfileImage() {
  return (
    <div>
      <Image alt="Profile Image" src={profile} className={styles.ProfileImg} />
    </div>
  );
}
