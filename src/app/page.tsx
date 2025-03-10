import Image from "next/image";
import RSVP from "./components/RSVP";
import guanajuato from "../../public/kiss.jpg";
import birchSunset from "../../public/sunset_view_from_venue.jpg";
import { GiBigDiamondRing } from "react-icons/gi";
import Link from "next/link";

const full_address = "2300 Expedition Way, La Jolla, CA 92037";

export default function Home() {
  return (
    <div>
      <div className="fixed w-full flex-col top-0 backdrop-blur hidden">
        <div className="container mx-auto flex h-16 p-5">
          <div className="md:basis-1/4 font-[family-name:var(--font-pacifico)]">
            Penelope & Sofia&apos;s Wedding
          </div>
          <nav className="hidden md:flex basis-3/4 justify-end">
            <ul className="list-none items-center md:flex justify-end gap-5">
              <li>Wedding Details</li>
              <li>Accomodations</li>
              <li>Photo Gallery</li>
              <li>Registry</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="pb-20 pt-8 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-20 items-center sm:items-start">
          <section className="w-full">
            <div className="md:grid grid-cols-2">
              <div className="flex flex-col w-full items-center justify-center">
                <h1 className="text-center">
                  Penelope and Sofia{" "}
                  <span className="text-nowrap">are tying the knot</span>
                </h1>
                <h2 className="pb-3 md:p-4 text-center font-[family-name:var(--font-pacifico)]">
                  <GiBigDiamondRing className="mr-3 inline" />
                  Join us in celebration
                  <GiBigDiamondRing className="ml-3 inline" />
                </h2>
              </div>
              <Image
                className="mx-auto md:w-2/3"
                src={guanajuato}
                alt="Photo of Penelope and Sofia on vacation in Guanajuato, MX"
                priority
              />
            </div>
          </section>
          <section className="container mx-auto text-center md:py-8">
            <h1 className="text-4xl md:text-5xl">RSVP</h1>
            <RSVP />
          </section>
          <section className="container mx-auto text-center py-8">
            <h1>Venue Information</h1>
            <p className="p-1">
              <a
                href="https://aquarium.ucsd.edu/"
                target="_blank"
                className="underline"
              >
                Birch Aquarium
              </a>
            </p>
            <a href={`maps:?q=${full_address}`} target="_blank">
              <address className="underline p-2">{full_address}</address>
            </a>
            <p className="max-w-3xl mx-auto mt-4">
              Birch Aquarium is a public aquarium in La Jolla, a community of
              San Diego, California. It serves as the public outreach center for
              Scripps Institution of Oceanography at the University of
              California, San Diego, where we first met.
              <br />
              <br />
              The Pacific Ocean and especially this stretch of the coast holds a
              special place in our hearts, and we hope it will move yours too.
              <br />
              <br />
              Our guests will be free to explore all of the Aquarium&apos;s
              exhibits during the reception.
            </p>
            <Image
              className="mx-auto md:w-1/2 mt-6"
              src={birchSunset}
              alt="Photo of Penelope and Sofia on vacation in Guanajuato, MX"
              priority
            />
          </section>
          <section className="container mx-auto py-8 text-center">
            <h1>Itinerary</h1>
            <div className="flex flex-col gap-8">
              <div>
                <h2>Thursday Night Dinner</h2>
                <p>Thursday, July 10 @ 6pm</p>
                <p>Location TBD</p>
              </div>
              <div>
                <h2>Wedding</h2>
                <p>Friday, July 11</p>
                <p>Cocktail Hour @ 6pm</p>
                <p>Ceremony @ 7pm</p>
                <p>Dinner @ 8pm</p>
                <p>Last Call @ 10pm</p>
                <p>Ends @ 11pm</p>
              </div>
              <div>
                <h2>After Party</h2>
                <p>Friday, July 11 @ 11pm</p>
                <p>Location TBD</p>
              </div>
              <div>
                <h2>Saturday Brunch</h2>
                <p>Saturday, July 12 @ 12pm</p>
                <p>Location TBD</p>
              </div>
              <div>
                <h2>Sunday Beach Day</h2>
                <p>Location TBD</p>
              </div>
            </div>
          </section>
          <section
            id="accommodations"
            className="container text-center mx-auto p-8"
          >
            <h1>Where to stay</h1>
            <p className="max-w-3xl mx-auto">
              Most of our guests are booking Airbnbs. When booking, keep in mind
              that traffic tends to be light going North and heavy going South
              on the freeway in the afternoons. If you are interested in sharing
              an Airbnb or reserving a group of hotel rooms, let us know and we
              will try our best to connect people!
            </p>
            <p>
              For more information about our favorite neighborhoods{" "}
              <Link href="/places-to-stay" className="underline">
                Click Here
              </Link>
            </p>
          </section>
          <section
            id="activities"
            className="container mx-auto text-center p-4"
          >
            <h1>Things to do</h1>
            <ul className="list-none">
              <li className="mb-4">
                <a
                  href="https://zoo.sandiegozoo.org/"
                  target="_blank"
                  className="underline"
                >
                  San Diego Zoo
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://balboapark.org/"
                  target="_blank"
                  className="underline"
                >
                  Balboa Park
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://www.westfield.com/en/united-states/utc"
                  target="_blank"
                  className="underline"
                >
                  UTC Mall
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://lajolla.com/article/la-jolla-cove-seals-8-things-need-know-before-visiting/"
                  target="_blank"
                  className="underline"
                >
                  La Jolla Cove
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://hiddensandiego.com/things-to-do/places/kate-sessions-park"
                  target="_blank"
                  className="underline"
                >
                  Kate Sessions Memorial Park
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://www.belmontpark.com/"
                  target="_blank"
                  className="underline"
                >
                  Belmont Park
                </a>
              </li>
            </ul>
          </section>
          <section className="container text-center mx-auto p-8">
            <h1>Registry</h1>
            <p className="max-w-3xl mx-auto">
              We are fortunate to have built a home full of love and laughter
              together. Your love is the greatest gift, and your presence at our
              wedding is all we ask. If you&apos;d like to contribute in another
              way, a gift to our future fund would be warmly received as we
              start this new chapter.
            </p>
          </section>
        </main>
        <footer className="flex items-center justify-center p-8">
          <Link
            href="/"
            className="cursor-pointer hover:underline hover:underline-offset-4"
          >
            Back to top &nbsp;
          </Link>
          <GiBigDiamondRing />
        </footer>
      </div>
    </div>
  );
}
