import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden bg-acid-50 pt-[120px] md:pt-[130px] lg:pt-[160px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div
                className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-6 text-3xl font-bold leading-snug text-whito-50 sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  ACID DAO
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-whito-50 sm:text-lg sm:leading-[1.44]">
                ACID DAO seeks out promising investments poised to catalyze revolutionary shifts for the internets ongoing evolution with meticulous, ground-up research and evaluation.
                </p>
                <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
                  <li>
                    <Link
                      href="https://birdeye.so"
                      className="inline-flex items-center justify-center rounded-md bg-whito-50 px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-acid-100"
                    >
                      Buy $ACID Token
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://telegram.org/"
                      target="_blank"
                      className="flex items-center gap-4 rounded-md bg-whito-50/[0.12] px-6 py-[14px] text-base font-medium text-whito-50 transition duration-300 ease-in-out hover:bg-acid-100 hover:text-blueo-50"
                    >
                      <svg
                        className="fill-current"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12.3583 9.38244C11.3857 9.787 9.44177 10.6243 6.52657 11.8944C6.05318 12.0827 5.8052 12.2669 5.78263 12.4469C5.74448 12.7513 6.12559 12.8711 6.64455 13.0343C6.71515 13.0565 6.78829 13.0795 6.86327 13.1038C7.37385 13.2698 8.06068 13.464 8.41773 13.4717C8.74161 13.4787 9.1031 13.3452 9.50219 13.0711C12.226 11.2325 13.632 10.3032 13.7202 10.2831C13.7825 10.269 13.8688 10.2512 13.9273 10.3032C13.9858 10.3552 13.98 10.4536 13.9738 10.48C13.9361 10.641 12.4401 12.0318 11.6659 12.7515C11.4246 12.9759 11.2534 13.135 11.2184 13.1714C11.14 13.2528 11.0601 13.3298 10.9833 13.4038C10.509 13.8611 10.1532 14.204 11.003 14.764C11.4114 15.0331 11.7381 15.2556 12.0641 15.4776C12.4201 15.7201 12.7752 15.9619 13.2347 16.2631C13.3517 16.3398 13.4635 16.4195 13.5724 16.4971C13.9867 16.7925 14.3589 17.0579 14.8188 17.0155C15.086 16.991 15.362 16.7397 15.5022 15.9903C15.8335 14.2193 16.4847 10.382 16.6352 8.80081C16.6484 8.66228 16.6318 8.48498 16.6185 8.40715C16.6051 8.32932 16.5773 8.21842 16.4761 8.13633C16.3563 8.03911 16.1714 8.01861 16.0886 8.02C15.7125 8.0267 15.1354 8.22735 12.3583 9.38244Z" fill="#000000"></path> </g>
                        <defs>
                          <clipPath id="clip0_2005_10818">
                            <rect width="24" height="24" fill="whito-50" />
                          </clipPath>
                        </defs>
                      </svg>
                      Join the Telegram
                    </Link>
                  </li>
                </ul>

                <div>
                  <p className="mb-4 text-center text-base font-medium text-whito-50/60">
                    Powered by Solana (and others)
                  </p>
                  <div
                    className="wow fadeInUp flex items-center justify-center gap-4 text-center"
                    data-wow-delay=".3s"
                  >
                    <Image
                      src={`/images/hero/brand.svg`}
                      alt="logo"
                      width={500}
                      height={140}
                      className="transition opacity-70 hover:drop-shadow-lg 	"
                    />
                  </div>
                </div>
              </div>
            </div>
            

            <div className="w-full px-4">
            <div className="mt-16">
                  
                </div>
              <div
                className="wow fadeInUp relative z-10 mx-auto max-w-[845px]"
                data-wow-delay=".25s"
              >
                <div className="mt-16">
                  <Image
                    src="/images/hero/roadmapnew.png"
                    alt="hero"
                    className="mx-auto max-w-full rounded drop-shadow-xl "
                    width={845}
                    height={316}
                  />
                </div>
                
              </div>
            </div>
            
            <h1 className="mb-6 mt-10 ml-6 text-3xl font-bold leading-snug text-whito-50 sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  $ACID Tokenomics
                  
                </h1>
                <Image
                    src="/images/hero/token.gif"
                    alt="hero"
                    className="mx-auto max-w-full m-8 rounded shadow-inner"
                    width={90}
                    height={90}
                  />
                <p className="mx-auto mb-0 max-w-[600px] text-acid-50 font-medium bg-acid-100 p-6 rounded drop-shadow-xl sm:text-lg sm:leading-[1.44]">
                Total Supply: 1,000,000,000 <br /> $ACID Max Supply: 1,000,000,000 <br /> $ACID Circulating Supply: ‍999,975,729 <br /> $ACID Distribution: All tokens (100%) added to the Liquidity Pool (LP). <br /> LP Tokens: Burned to ensure fairness and security. <br /> Ownership: Fully community-owned; project is decentralized with no central authority.                </p>
            <div className="w-full px-4">
            
              <div
                className="wow fadeInUp relative z-10 mx-auto max-w-[845px]"
                data-wow-delay=".25s"
              >
                
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
