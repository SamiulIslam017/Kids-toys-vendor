const Home = () => {
  return (
    <div className="flex flex-col gap-14 md:gap-24 lg:gap-24">
      {/* Banner section  */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://i.ibb.co/34fzBvp/22895273-6687810-clipdrop-remove-text-clipdrop-cleanup.jpg")`, backgroundPosition:"bottom center"
        }}
      >
        <div className="hero-overlay bg-opacity-10"></div>
        <div className=" w-2/3 text-left text-black">
          <div className="w-5/12">
            <h1 className="text-2xl font-medium mb-5 text-black tracking-wider">Big fun kid&apos;s</h1>
            <h1 className="mb-5 text-7xl font-bold custom-color tracking-wider">A World To Explore</h1>
            <p className="mb-5 tracking-wide">
            Active toys for smart and active kids. Bring fun and  non-stop learning for your little ones. 
            </p>
            <button className="btn primary-bg-color border-0">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
