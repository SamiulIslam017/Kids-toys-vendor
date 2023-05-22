

const Blogs = () => {
    return (
        <div className='w-full max-w-screen-xl mx-auto p-8 my-12 md:my-16 lg:my-16'>
            <div className='w-full h-10 flex justify-between items-center pb-10 mb-10 border-b-2'>
                <h1 className='text-6xl  font-bold mb-4'>Blogs</h1>
                
            </div>
            <div className='  mb-20'>
                
                <h1 className='text-3xl font-bold'>The differences between uncontrolled and controlled components.</h1>
                <p className='mt-6 text-base font-medium text-amber-100 opacity-60'>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally. They use a ref to access the DOM element is current value and update the state accordingly.</p>
            </div>
            <div className='  mb-20'>
                
                <h1 className='text-3xl font-bold'>How to validate React props using PropTypes</h1>
                <p className='mt-6 text-base font-medium text-amber-100 opacity-60'>Props and PropTypes are important mechanisms for passing read-only attributes between React components.We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.When developing a React application, you’ll need to structure and define your props to avoid bugs and errors. Just like a function might have mandatory arguments, a React component might require a prop to be defined, otherwise, it will not render properly. Forgetting to pass a required prop into a component that needs it could cause your app to behave unexpectedly.</p>
            </div>
            <div className='  mb-20'>
                
                <h1 className='text-3xl font-bold'>The difference between nodejs and express js.</h1>
                <p className='mt-6 text-base font-medium text-amber-100 opacity-60'>Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as A platform built on Chromes JavaScript runtime for easily building fast, scalable network applications</p>
            </div>
            <div className='  mb-20'>
                
                <h1 className='text-3xl font-bold'>What is a custom hook, and why will you create a custom hook?</h1>
                <p className='mt-6 text-base font-medium text-amber-100 opacity-60'>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
            </div>
        </div>
    );
};

export default Blogs;