import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TeamMember = ({ name, role, imageSrc }) => (
  <div className="w-full lg:w-1/3 p-4">
    <div className="relative bg-purple-500 rounded-2xl pt-7 mb-12 lg:mb-0">
      <Image className="mx-auto h-72 object-cover" src={imageSrc} alt={name} width={288} height={288} />
      <div className="absolute -bottom-12 left-4 right-4">
        <div className="bg-purple-900 rounded-xl p-4">
          <p className="text-white text-lg font-semibold mb-1">{name}</p>
          <div className="flex flex-wrap justify-between items-center gap-4">
            <p className="text-white text-opacity-70 text-sm">{role}</p>
            {/* <div className="flex gap-4">
              <Link href="#" className="inline-block opacity-50 hover:opacity-100 transition duration-200">
                <Image className="h-4" src="/vista-assets/images/logos/twitter-x-logo.svg" alt="Twitter" width={16} height={16} />
              </Link>
              <Link href="#" className="inline-block opacity-50 hover:opacity-100 transition duration-200">
                <Image className="h-4" src="/vista-assets/images/logos/linkedin-logo.svg" alt="LinkedIn" width={16} height={16} />
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function Team() {
  return (
    <section className="bg-white pt-32 pb-56">
      <div className="container mx-auto px-4">
        <p className="uppercase text-purple-900 text-center tracking-widest text-xs mb-4">diverse and world-class</p>
        <h2 className="text-purple-900 text-4xl text-center md:text-5xl font-bold">Meet our team</h2>
        <div className="flex justify-between items-center flex-wrap gap-4 mb-20">
         
        </div>
        <div className="flex flex-wrap -m-4">
          <TeamMember 
            name="Gabriel Lunesu"
            role="Founder & CEO"
            imageSrc="https://images.squarespace-cdn.com/content/v1/592702373a04114633ee6536/1526588154869-XBVLUKKJZBQHV2X3EI98/Natural+Light+Actor+Headshot+in+NYC+-+Eden"
          />
          <TeamMember 
            name="Lon Ploemen"
            role="Founder & CEO"
            imageSrc="https://images.squarespace-cdn.com/content/v1/592702373a04114633ee6536/1526588154869-XBVLUKKJZBQHV2X3EI98/Natural+Light+Actor+Headshot+in+NYC+-+Eden"
          />
          <TeamMember 
            name="Yasser Khai"
            role="Head of Technology"
            imageSrc="https://images.squarespace-cdn.com/content/v1/592702373a04114633ee6536/1526588154869-XBVLUKKJZBQHV2X3EI98/Natural+Light+Actor+Headshot+in+NYC+-+Eden"
          />
        </div>
      </div>
    </section>
  );
}
