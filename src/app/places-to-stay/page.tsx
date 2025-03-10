import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="fixed w-full flex flex-col top-0 backdrop-blur">
        <div className="container mx-auto flex h-16 p-5">
          <div className="text-center md:basis-1/4 font-[family-name:var(--font-pacifico)]">
            <Link href="/#accommodations">
              <IoIosArrowBack className="inline mr-2 size-5" />
            </Link>
            Penelope & Sofia&apos;s Wedding
          </div>
          <nav className="hidden basis-3/4 justify-end">
            <ul className="list-none items-center md:flex justify-end gap-5">
              <li>Wedding Details</li>
              <li>Accomodations</li>
              <li>Photo Gallery</li>
              <li>Registry</li>
            </ul>
          </nav>
        </div>
      </div>
      <main className="container mx-auto py-20 px-8 max-w-3xl">
        <h1 className="text-center">Places To Stay</h1>
        <h2>La Jolla</h2>
        <p className="mb-3">
          La Jolla is a beautiful seaside area, known for its rugged coastline.
          Trails wind past pine trees and sandstone canyons in Torrey Pines
          State Natural Reserve. La Jolla Cove has sweeping ocean views, and the
          Shell Beach tide pools are home to anemones and crabs. Posh boutiques
          and waterfront restaurants dot walkable La Jolla Village.
        </p>
        <h3>Features</h3>
        <ul>
          <li>One of two neighborhoods closest to wedding location</li>
          <li>Beautiful views</li>
          <li>Walkable location</li>
          <li>Parks and outdoor activities</li>
        </ul>
        <h2>University City</h2>
        <p className="mb-3">
          University City is a large residential and commercial district next to
          the University of California, San Diego. It&apos;s divided by Rose
          Canyon Open Space Park, where hiking trails pass through valleys,
          shrub-covered hills, and woodland. The Westfield UTC outdoor mall
          includes upscale fashion chains, trendy eateries, and an ice rink.
        </p>
        <h3>Features</h3>
        <ul>
          <li>One of two neighborhoods closest to wedding location</li>
          <li>Suburban feel with quiet residences</li>
        </ul>
        <h2>Mission Bay</h2>
        <p className="mb-3">
          Centered on its namesake waterway, the Mission Bay neighborhood is
          more than 50% water and known for SeaWorld, which has rides,
          aquariums, and animal shows. A huge manmade water sports zone, popular
          for sailing and kitesurfing, occupies the western bay. Stand-up
          paddleboarders ply the calm waters off Fiesta Island, a peninsular
          park with a long beach. To the north, salt marsh preserves attract
          wading birds.
        </p>
        <h3>Features</h3>
        <ul>
          <li>
            Located in central San Diego allowing for easy driving anywhere in
            the city
          </li>
          <li>Beautiful views</li>
          <li>Parks and outdoor activities</li>
          <li>Close to SeaWorld</li>
        </ul>
        <h2>North Park</h2>
        <p className="mb-3">
          Our home! North Park is a trendy neighborhood where coffee shops,
          craft-beer bars and indie boutiques line University Avenue. The
          restaurant scene is heavy on brunch spots, upscale pubs, taquerias and
          sushi lounges, and nightlife often revolves around the Observatory
          North Park, a 1929 theater that hosts rap, rock and electronica. The
          North Park Thursday Market also features live music.
        </p>
        <h3>Features</h3>
        <ul>
          <li>
            Located in central San Diego allowing for easy driving anywhere in
            the city
          </li>
          <li>Close to the San Diego Zoo and Balboa Park</li>
          <li>Great food</li>
          <li>Walkable location</li>
        </ul>
      </main>
    </div>
  );
};

export default page;
