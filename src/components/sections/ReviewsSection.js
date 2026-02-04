import React from "react";
import Image from "next/image";
import Icon from "../ui/Icon";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ReviewImageBg from "./ReviewImageBg";
import ReviewCard from "../cards/ReviewCard";

export default function ReviewsSection() {
  const reviews_user = [
    {
      user: "Verified",
      description:
        "Unfortunately someone vandalized my car door and so my key wasn't working. I didn't have the remote either so I was basically locked out of my own car. I called Eagle Locksmith and they dispatched David to me within 20 minutes of calling. David was able to open my door, make me a new remote, and he also made me an extra key. Eagle Locksmith is a great company and David is an amazing locksmith who saved me in the middle of the night. The price was fair and I didn't get charged for the extra key. Thank you to Eagle Locksmith!",
      rating: 5,
      date: "2 weeks ago",
      link: "https://maps.app.goo.gl/5MaUYXaZtJUi1Gib8",
    },
    {
      user: "Carolyn Coleman",
      description:
        "Very satisfied with the prompt and thorough service from Eagle Locksmith. I would recommend them for all your locksmith needs",
      rating: 5,
      date: "2 weeks ago",
      link: "https://maps.app.goo.gl/Fib87JKVd3rhJNya9",
    },
    {
      user: "Aurora M",
      description:
        "Thank so much for saving me! Came opened my car! Awesome person Yani is great! Thank u sir!",
      rating: 5,
      date: "2 weeks ago",
      link: "https://maps.app.goo.gl/NX2ryeKcwZ3KPZc76",
    },
    {
      user: "Jared Bryant",
      description:
        "My experience with Eagle Locksmith was outstanding from start to finish. I needed to upgrade the locks on my business after a break-in, and they came through with high-quality products and expert installation. The technician even walked me through how the new system worked and made sure everything was perfect before leaving. The team clearly knows what they’re doing and genuinely cares about their customers. I feel much safer now. Thank you!",
      rating: 5,
      date: "2 weeks ago",
      link: "https://maps.app.goo.gl/Aumh2TAALeXAmyt79",
    },
    {
      user: "Lucy Wells",
      description:
        "This locksmith responded to my emergency lockout right away. Professional, prompt service at a very reasonable cost. It was the best experience I could have hoped for. Strongly advised if you ever need a locksmith quickly!",
      rating: 5,
      date: "2 months ago",
      link: "https://maps.app.goo.gl/by5jks51Z7ebS5X37",
    },
    {
      user: "Mickey",
      description:
        "Needed a new lock for my front door, and they did an amazing job. High-quality work and very courteous staff. Will use again!",
      rating: 5,
      date: "a month ago",
      link: "https://maps.app.goo.gl/ZoTjZSL3ya41ZL1b7",
    },
    {
      user: "Howard T. Headen",
      description:
        "This locksmith business is fantastic. My lock was swiftly fixed by the polite and punctual expert. They even offered beneficial guidance about future security. Outstanding value for the money spent on the service. Strongly advised for anyone in need of a locksmith!",
      rating: 5,
      date: "2 weeks ago",
      link: "https://maps.app.goo.gl/DxApcvaeC3HJyVkv8",
    },
    {
      user: "Emily Villalta",
      description:
        "I was desperate to get a car key made and these guys showed up so fast!! They made me 2 keys and helped start my car because the battery was dead. Definitely would recommend! Life savers!!",
      rating: 5,
      date: "a month ago",
      link: "https://maps.app.goo.gl/JeeTk6REugyLix6bA",
    },
    {
      user: "Jeffery Battle",
      description:
        "I recently had the pleasure of working with Eagle Locksmith, and I couldn’t be more satisfied with the service provided. I needed my locks changed at my home, and Yanni was prompt, professional, and highly skilled.",
      rating: 5,
      date: "a month ago",
      link: "https://maps.app.goo.gl/7TYVD2f5LfjkMFZ97",
    },
    {
      user: "Margaret J. Garza",
      description:
        "This locksmith is unique among the several I've used. The technician was prompt, informed, and provided a fair pricing. What might have been a tense scenario was made simple by them. Without a doubt, I will give them a call if I have any further needs.",
      rating: 5,
      date: "2 weeks ago",
      link: "https://maps.app.goo.gl/Aumh2TAALeXAmyt79",
    },
  ];

  return (
    <div className="relative parent">
      {/* Background images behind everything */}
      <div className="grid grid-cols-5 grid-rows-2 min-h-[500px] absolute inset-0">
        {/* Image */}
        <ReviewImageBg url="image" />
        <ReviewImageBg url="image-1" />
        <ReviewImageBg url="image-2" />
        <ReviewImageBg url="image-3" />
        <ReviewImageBg url="image-4" />
        <ReviewImageBg url="image-5" />
        <ReviewImageBg url="image-6" />
        <ReviewImageBg url="image-7" />
        <ReviewImageBg url="image-8" />
        <ReviewImageBg url="image-9" />
      </div>

      <div className=" mx-auto py-24 z-10 relative ">
        {/* LOGO */}
        <div className="p-2 mx-auto mb-10 bg-white rounded-full w-fit">
          <Image
            src="/images/logo.png"
            width={100}
            height={100}
            alt="Example"
          />
        </div>

        {/* Reviews */}
        <div className="relative overflow-hidden w-full">
          {/* Animated track */}
          <div className="marquee-wrapper py-10 ">
            <div className="marquee-track">
              {reviews_user.map((item, idx) => (
                <div key={idx} style={{ minWidth: "300px" }}>
                  <ReviewCard
                    desription={item.description}
                    name={item.user}
                    link={item.link}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://search.google.com/local/reviews?placeid=ChIJ_XsIo3PEt4kRaTqJm2bFX1M"
              className="text-white hover:underline"
            >
              See all reviews
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
