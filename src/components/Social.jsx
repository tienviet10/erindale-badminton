import React from "react";
import emailIcon from "../assets/email.webp";
import facebookIcon from "../assets/facebook.webp";
import instagramIcon from "../assets/instagram.webp";
import "./Social.css";

const Social = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="customSocialList text-white">
      <div
        className="customSocialItems bg-[#E1306C]"
        onClick={() =>
          openInNewTab(
            "https://www.instagram.com/erindale_badminton_club/?next=%2F/"
          )
        }
      >
        <div className="customTextItems">Instagram</div>
        <img className="h-7 mr-3" src={instagramIcon} alt="Instagram icon" />
      </div>
      <div
        className="customSocialItems bg-[#3b5998]"
        onClick={() =>
          openInNewTab(
            "https://www.facebook.com/profile.php?id=100088558296408"
          )
        }
      >
        <div className="customTextItems">Facebook</div>
        <img className="h-7 mr-3" src={facebookIcon} alt="Facebook icon" />
      </div>
      {/* <div
        className="customSocialItems bg-[#565f69]"
        onClick={() => openInNewTab("https://www.linkedin.com/in/viettran94/")}
      >
        <div className="customTextItems">TicTok</div>
        <HiOutlineMail className="mr-3" size={30} />
      </div> */}
      <div
        className="customSocialItems bg-[#6fc2b0]"
        onClick={() =>
          openInNewTab("mailto:erindale.badminton@gmail.com?subject=Questions")
        }
      >
        <div className="customTextItems">Email</div>
        <img className="w-7 mr-3" src={emailIcon} alt="Facebook icon" />
      </div>
    </div>
  );
};

export default Social;
