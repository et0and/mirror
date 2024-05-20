import React from "react";
import Image from "next/image";
import Head from "next/head";

const IndexPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Stade du miroir</title>
        <meta property="og:title" content="Stade du miroir" key="title" />
        <meta property="twitter:title" content="Stade du miroir" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#4689db" />
        <meta
          property="description"
          content="Beyond the mirror, I look through you"
        />
        <meta
          property="og:description"
          content=" eyond the mirror, I look through you"
        />
        <meta
          property="twitter:description"
          content="Beyond the mirror, I look through you"
        />
        <meta property="og:url" content="https://work.tom.so/mirror" />
        <meta property="og:image" content="/mirror/og.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="/mirror/og.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/mirror/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/mirror/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/mirror/favicon-16x16.png"
        />
        <link rel="manifest" href="/mirror/site.webmanifest" />
      </Head>
      <div className="relative h-screen w-screen">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-0 h-full w-full object-cover"
        >
          <source src="/mirror/sky.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-10 flex items-center justify-center p-8">
          <div className="max-w-full max-h-full">
            <Image
              src="/mirror/window.png"
              alt="Window with the curtains drawn closed."
              width={500}
              height={500}
              className="max-w-full max-h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
