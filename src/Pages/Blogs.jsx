const Blogs = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto p-8 my-12 md:my-16 lg:my-16">
      <div className="w-full h-10 flex justify-between items-center pb-10 mb-10 border-b-2">
        <h1 className="text-6xl  font-bold mb-4">Blogs</h1>
      </div>
      <div className="  mb-20">
        <h1 className="text-3xl font-bold">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h1>
        <p className="mt-6 text-base font-medium ">
          Refresh tokens allow you to balance your users access needs with your
          organizations security practices. Access tokens help users get the
          resources they need to complete their tasks, but such tokens can also
          expose your organization to data compromise or other malicious actions
          if a hacker is able to steal them.
        </p>
        <p className="mt-6 text-base font-medium ">
          Store it in local browser storage. ... Store it in a cookie in client
          side, it can be safer than local browser storage. Dont store the token
          but store username and password in the browser or client-side cookie,
          and then retrieve a new token by sending credentials silently.
        </p>
        <p className="mt-6 text-base font-medium ">
          The application receives an access token after a user successfully
          authenticates and authorizes access, then passes the access token as a
          credential when it calls the target API.
        </p>
      </div>
      <div className="  mb-20">
        <h1 className="text-3xl font-bold">Compare SQL and NoSQL databases?</h1>
        <p className="mt-6 text-base font-medium">
          First off, MySQL is a relational database that is based on a tabular
          design. NoSQL is non-relational and has a document-based design. A
          MySQL database is currently more popular in the market than NoSQL
          because the latter is still fairly new.
        </p>
        <p className="mt-6 text-base font-medium">
          At a high level, NoSQL and SQL databases have many similarities. In
          addition to supporting data storage and queries, they both also allow
          one to retrieve, update, and delete stored data.
        </p>

        <p className="mt-6 text-base font-medium">
          SQL is a query language, while SQL Server is a database management
          system. SQL is a query language for working with a relational
          database, while SQL Server is proprietary software that performs SQL
          queries.
        </p>
      </div>
      <div className="  mb-20">
        <h1 className="text-3xl font-bold">
          What is express js? What is Nest JS?
        </h1>
        <p className="mt-6 text-base font-medium">
          Express is a node js web application framework that provides broad
          features for building web and mobile applications. It is used to build
          a single page, multipage, and hybrid web application. Its a layer
          built on the top of the Node js that helps manage servers and routes.
        </p>
        <p className="mt-6 text-base font-medium ">
          NestJS is a framework for developing modern server-side applications
          in Node. js. It is built on top of Express, a popular server framework
          for Node. js, and provides a robust set of features for building
          efficient, scalable, and enterprise-grade applications.
        </p>
      </div>
      
    </div>
  );
};

export default Blogs;
