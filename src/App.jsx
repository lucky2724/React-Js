
import React,{useState,useEffect,useRef, useMemo} from 'react';
import "./App.css";
// import Child from './components/Child';
// import pizza from './assets/pizza.jpeg';
// import burger from './assets/burger.jpeg';
// import wrap from './assets/wrap.jpeg';

import Counter from './components/Counter';
import Reset from './components/Reset';
import Error from './components/Error';

import Timer from './Timer';
// import "./ClassName.css";
import Name from './components/Name';
import Input from './components/Input';
import Dashboard from './components/Dashboard';
import axios from 'axios';
import Loader from './components/Loader';

import { userContext } from './context/userContext';

import {createBrowserRouter,RouterProvider} from "react-router-dom";
// import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products'; 
import NotFound from './routerComponents/NotFound';
import NavBar from './NavBar';
import ProductDetail from './dynamicComponents/ProductDetail';
import Shop from './pages/Shop';
import Men from './dynamicComponents/Men';
import Women from './dynamicComponents/Women';
import Kids from './dynamicComponents/Kids';
import Login from './dynamicComponents/Login';
import Home from './dynamicComponents/Home';
import Navbar from './dynamicComponents/Navbar';
import ForwardBackward from './dynamicComponents/ForwardBackward';
import Child from './dynamicComponents/Child';
// import NavBar from './NavBar';



// this is the problem we use useMemo
const App = () => {

  const[count,setCount]=useState(0);
  const[number,setNumber]=useState(1);

  const slowCalculation=(num)=>{
    console.log("Heavy Calculation Running .. !!");
    for(let i=0;i<1000000000;i++){}//fake delay
    console.log("Calculated");
    return num+1;
  };

  const result=useMemo(()=>{
    return slowCalculation(number);
  },[number]);

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increase Count</button>

      <h2>Result : {result}</h2>
      <button onClick={()=>setNumber(number+1)}>Change Number</button>
    </div>
  )
}

export default App






//React.Memo()
// const App = () => {

//   const[count,setCount]=useState(0);
//   const[count1,setCount1]=useState(0);

//   useEffect(()=>{

//     console.log("re-rendered")
//   },[count]);
  
//   return (
//    <div>
//      <div>
//       <h4>{count}</h4>
//       <button onClick={()=>setCount(count+1)}>click</button>
//     </div>
//     <Child count1={count1}/>
//    </div>
//   )
// }

// export default App






//Local Storage in React
// const App = () => {

//   // localStorage.clear();

//   // localStorage.setItem("name2","Luckyy pala");
//   // localStorage.setItem("age2",22);

//   // const name=localStorage.getItem("name2");
//   // const age=localStorage.getItem("age2");

//   // console.log(name);
//   // console.log(age);

//   // localStorage.removeItem("age2");

//   const user={
//     name:"Surya",
//     age:21
//   }

//   localStorage.setItem("user",JSON.stringify(user));

//   // const user1=localStorage.getItem("user");

//   // console.log(user1);

//   const user1=JSON.parse(localStorage.getItem("user"));

//   console.log(user1.name);
//   console.log(user1.age);

//   return (
//     <div >
  
//       <p>{user1.name}</p>
//       <p>{user1.age}</p>
//     </div>
//   )
// }

// export default App





//Programatic Navigation Example
// const App = () => {

//   const router=createBrowserRouter([
//     {
//       path:"/",
//       element:<div>
//           <Navbar />
//           <ForwardBackward />
//           <Home />
//       </div>
//     },
//     {
//       path:"/login",
//       element:<div>
//           <Navbar />
//           <ForwardBackward />
//           <Login />
//       </div>
//     },
//     {
//       path:"/about",
//       element:<div>
//           <Navbar />
//           <ForwardBackward />
//           <About />
//       </div>

//     },
//   ])

//   return (
//     <RouterProvider router={router}/>
//   )
// }

// export default App




//Navigation Routs
// const App = () => {
//   const router=createBrowserRouter([
//     {
//       path:"/",
//       element:<div>
//         <NavBar />
//         <Home />
//       </div>
//     },
//     {
//       path:"/products",
//       element:<div>
//         <NavBar />
//         <Products />
//       </div>
//     },
//     {
//       path:"/products/:id",
//       element:<div>
//         <NavBar />
//         <ProductDetail />
//       </div>
//     },
//     {
//       path:"/about",
//       element:<div>
//         <NavBar />
//         <About />

//       </div>
//     },
//     {
//       path:"/shop",
//       element:<div>
//         <NavBar />
//         <Shop />

//       </div>,
//       children:[
//         {
//           path:"men",
//           element:<div>
//               <Men />
//             </div>
//         },

//         {
//           path:"women",
//           element:<div>
//               <Women />
//             </div>
//         },
//         {
//           path:"kids",
//           element:<Kids />
//         }
//       ]
//     },
    
    
//      {
//        path:"*",
//        element:<NotFound />
//      },
//    ]);


//   return (
//     <div>
      
//       <RouterProvider router={router}></RouterProvider>
//     </div>
//   )
// }

// export default App






//ROUTER EXAMPLE
// const App = () => {

//   const router=createBrowserRouter([
//     {
//       path:"/",
//       element:<div>
//         <NavBar />
//         <Home />
//       </div>
//     },
//     {
//       path:"/about",
//       element:<div>
//         <NavBar />
//         <About />
//       </div>
//     },
//     {
//       path:"/contact",
//       element:<div>
//         <NavBar />
//         <Contact />
//       </div>
//     },
//      {
//       path:"*",
//       element:<NotFound />
//     },
//   ]);


//   return (
//     <div>
      
//       <RouterProvider router={router}></RouterProvider>
//     </div>
//   )
// }

// export default App





//API DATA FETCHING USING FETCH API AND AXIOS MINI PROJECT
// const App = () => {

//   const[products,setProducts]=useState([]);
//   const[loading,setLoading]=useState(true);
//   const[error,setError]=useState(null);

//   //USING FETCH API TO GET PRODUCTS DATA FROM FAKE STORE API
//   // useEffect(()=>{
//   //   fetch("https://fakestoreapi.com/products")
//   //     .then((res)=>(res.json()))
//   //     .then((data)=>setProducts(data))
//   // },[]);

//   //USING AXIOS TO GET PRODUCTS DATA FROM FAKE STORE API
//   useEffect(()=>{
//     axios.get("https://fakestoreapi.com/products")
//       .then((res)=>{
//         setProducts(res.data);
//         setLoading(false);
//       })
        
//       .catch((err)=>{
//         setLoading(false);
//         setError("Failed to load products. Please try again! 🥺");
//         console.log(err);
//       });
//   },[]);


//   return (
//     <div clasName="products-container">
//       <h2 className="title">Products List</h2>
//       <div className="products-grid">

//           {
//             products.map((product)=>(
//               <div className="product-card" key={product.id}>
//                 <img src={product.image} alt={product.title} className="product-image" />
//                 <h3 className="product-title">{product.title}</h3>
//                 <p className="product-price">₹{product.price}</p>
//                 {/* <p className="product-description">{product.description}</p> */}
//                 <p className="product-category">Category: {product.category}</p>
//                 <p>⭐{product.rating.rate} ({product.rating.count} reviews)</p>
//               </div>
//             ))
//           }       
//       </div>
//       <div>{loading && (<Loader />)}</div>
//       <div>{error && (<Error message={error} />)}</div>
//     </div>
//   )
// }

// export default App;






//CONTEXT API EXAMPLE 
// const App = () => {

//   const[name,setName]=useState("Luckyy");
//   const[count,setCount]=useState(100);

//   function increaseCount(){
//     setCount(count+1);
//   }

//   return (
//     <userContext.Provider value={{name,count,increaseCount}}>
//       <h1>App</h1>
//       <Dashboard/>
//     </userContext.Provider>
//   )
// }

// export default App





//Props Drilling
// const App = () => {

//   const[name,setName]=useState("Luckyyy")

//   return (
//     <div>
//       <h1>App</h1>
//       <Dashboard name={name}/>
//     </div>
    
//   )
// }

// export default App






//MINI PROJECT - LIFTING STATE
// const App = () => {
  
//   const[name,setName]=useState("");

//   return (
//     <div>
//       <Name  name={name}/>
//       <Input setName={setName}/>
//     </div>
//   )
// }

// export default App




//Lifting state
// const App = () => {

//   const[count,setCount]=useState(0);

//   return (
//     <div>
//       <Counter count={count} setCount={setCount}/>
//       <Reset setCount={setCount}/>
//     </div>
//   )
// }

// export default App





//USE REF EXAMPLE TO GET PREVIOUS VALUE OF STATE
// const App = () => {

//   const [name1,setName1]=useState("");
//   const[name2,setName2]=useState("");

//   const prevName=useRef("");

//   useEffect(()=>{
//     prevName.current=name2;
//   },[name2])

//   const add=()=>{
//     setName2(name1);
//   }

//   return (
//     <div>
//       <input type="text" placeholder='Enter Your name..' 
//           onChange={(e)=>setName1(e.target.value)} /><br></br>

//       <button onClick={add}>Click</button>

//       <h4>Current Name : {name2}</h4>
//       <h5>Previous Name : {prevName.current}</h5>
//     </div>
//   )
// }

// export default App




//AUTO  FUCUS INPUT USING USEEREF
// const App = () => {

//   const inputRef=useRef(null);

//   useEffect(()=>{
//     inputRef.current.focus();
//   },[])

//   return (
//     <div>
//       <input ref={inputRef} placeholder='Enter Anything...'/>
//     </div>
//   )
// }

// export default App





//USE REF EXAMPLE
// const App = () => {

//   const[count,setCount]=useState(0);
//   const inputRef=useRef(null);
  
//   const add=()=>{
//     setCount(count+Number(inputRef.current.value));
//   }

//   useEffect(()=>{
//     console.log("page rendered");
//   },[inputRef,count])

//   return (
//     <div>
//       <input  ref={inputRef} placeholder='Enter Value..' type="text"/>

//       <h3>{count}</h3>
//       <button onClick={add}>Click</button>
//     </div>
//   )

//   // const myRef=useRef();
//   // console.log(myRef.current)

//   // return(
//   //   <div>
//   //     <input type="text" ref={myRef} />
//   //   </div>
//   // )
  
// }

// export default App





//SUBSCRIBE BUTTON EXAMPLE
// const App = () => {
//   const[subscribe,setSubscribe]=useState(true);

//   return (
//     <div>
//       <h4>Welcome to my Youtube Channel</h4>
//       <p>*Lucky Vlogs*</p>
//       <button onClick={()=>setSubscribe(!subscribe)}
//               className={subscribe?"":"subscribed"}
//         >{subscribe?"SUBSCRIBE":"SUBSCRIBED !!"}</button>
//     </div>
//   )
// }

// export default App



//ERRORS AND SUCCESS STYLING
// const App = () => {

//   const[name,setName]=useState("");
//   const[msg,setMsg]=useState("");
//   const[type,setType]=useState("");

//   const handleCheck=()=>{
//     if(name.trim()===""){
//       setMsg("Plzz Enter Yor Name !!");
//       setType("error");
//     }else{
//       setMsg("Name Looks Good !! - " +name);
//       setType("success");
//     }
//   }

//   return (
//     <div>
//       <input type="text" placeholder='Enter your Name..' onChange={(e)=>setName(e.target.value)} /><br></br>
//       <button onClick={handleCheck} type="submit">Submit</button>

//       <h3>{msg && <p className={type}>{msg}</p>}</h3>
//     </div>
//   )
// }

// export default App


// const App = () => {

//   const[tab,setTab]=useState("home");

//   return (
//     <div>
//       <button className={tab==="home"?"active":""} onDoubleClick={()=>setTab("home")}>HOME</button>
//       <button className={tab==="about"?"active":""} onClick={()=>setTab("about")}>ABOUT</button>
//       <button className={tab==="contact"?"active":""} onClick={()=>setTab("contact")}>CONTACT</button>


//       <h3>{tab}</h3>

//     </div>
//   )
// }

// export default App




//CONDITIONAL CLASSNAME
// const App = () => {

//   const[activeStatus,setActiveStatus]=useState(true);

//   return (
//     <div>
//       <button className={activeStatus?"active":"inactive"}
//               onClick={()=>setActiveStatus(!activeStatus)}>
//             {activeStatus?"Active":"InActive"
//         }</button>
//     </div>
//   )
// }

// export default App




//Inline Conditional Style
// const App = () => {

//   // const isOnline=true;

//   const[mode,setMode]=useState(true);

//   return (
//     <div>
//       <h1 style={{color:mode?"green":"red",fontFamily:"Times new roman"}}>
//         {mode ? "Online":"Offline"}
//       </h1>

//       <button onClick={()=>setMode(!mode)}>Mode</button>
//     </div>
//   )
// }

// export default App






//ADD FRUITS AND REMOVE FRUITS FROM LIST USING USESTATE
// const App = () => {

//   const[input,setInput]=useState("");
//   const[items,setItems]=useState(["Apple","Bananana"]);

//   const addItem=()=>{
//     setItems([...items,input]);
//     setInput("");
//   }

//   const removeItem=(index)=>{
//     const newArray=[...items];
//     newArray.splice(index,1);
//     setItems(newArray);
//   }

//   return (
//     <div>
//       {
//         items.map((item,index)=>(
//           <div key={index}>
//             <h2>{item}</h2>
//             <button onClick={()=>removeItem(index)}>Remove</button>
//           </div>
          
//         ))
//       }

//       <input type='text'
//         value={input}
//         placeholder='Enter Item Name' 
//         onChange={(e)=>setInput(e.target.value)}/><br></br>

//       <button onClick={addItem}>Add Item</button><br></br>
//       {/* <button onClick={removeItem}>Remove Item</button> */}
//     </div>
//   )
// }

// export default App




//List And Keys EXAMPLE 
// const App = () => {

//   const users=[{
//       id:101,
//       value:"Luckyyy"
//     },{
//       id:102,
//       value:"Suryaa"
//     },{
//       id:103,
//       value:"Ram"
//     }];

//   return (
//     <div>
//       {
//         users.map((user)=>{
//           return(
//             <div key={user.id}>
//               {user.id}-{user.value}
//             </div>
//           )
//         })
//       }


//       {/* {
//         users.map((user)=>(
//           <div key={user.id}> 
//               {user.id}-{user.value}
//           </div>
//         ))
//       } */}
//     </div>
//   )
// }

// export default App



// STOP WATCH TIMER ON UNMOUNTING OF COMPONENT
// import Child2 from './components/Child2';

// const App = () => {

//   const[show,setShow]=useState(true);

//   return (
//     <div>
//       <button onClick={()=>setShow(!show)}>{show ? "stop Timer":"Start Timer"}</button>

//       {
//         show && <Timer />
//       }
// f
//     </div>
//   )
// }

// export default App




//With DEPENDENCIES useEffect(()->{},[x])  WHEN X CHANGES
// const App = () => {

//   const[count,setCount]=useState(0);
//   const[number,setNumber]=useState(0);

//   useEffect(()=>{
//     console.log("Count Increaseed !!");
//   },[number]);


//   const handleIncrement=()=>{
//     setCount(count+1);
//   }

//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={handleIncrement}>Increment</button>
//     </div>
//   )
// }



//EMPTY ARRAY - usEffect(()=>{},[])  ONCE (ON MOUNT)
// const App = () => {

//   const[count,setCount]=useState(0);

//   useEffect(()=>{
//     console.log("Count Increaseed !!");
//   },[]);


//   const handleIncrement=()=>{
//     setCount(count+1);
//   }

//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={handleIncrement}>Increment</button>
//     </div>
//   )
// }



//useEffect(()=>{}) No DEPENDENCY
// const App = () => {

//   const[count,setCount]=useState(0);

//   useEffect(()=>{
//     console.log("Count Increaseed !!");
//   });


//   const handleIncrement=()=>{
//     setCount(count+1);
//   }

//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={handleIncrement}>Increment</button>
//     </div>
//   )
// }

// export default App


// const App = () => {


//   const[data,setData]=useState({
//     name:"",
//     phn:0,
//     city:"",
//   });

//   const[subData,setSubData]=useState(null);

//   const handleChange=(e)=>{
//     setData({
//       ... data,
//       [e.target.name]:e.target.value,
//     })
//   }

//   const handleSubmit=(e)=>{
//     e.preventDefault();

//     setSubData(data);

//     setData({
//       name:"",
//       phn:0,
//       city:"",
//     });

//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" 
//           placeholder='Enter Name'
//            onChange={handleChange}
//            value={data.name}
//            required/><br></br>

//         <input type="tel"
//           name="phn"
//             placeholder='Enter Mobile Number' 
//             maxLength={10}
//             onChange={handleChange}
//             value={data.phn}
//             required /><br></br>

//         <input type="text" 
//           name="city" 
//           placeholder='Enter your City' 
//           onChange={handleChange}
//           value={data.city}
//           required/><br></br>

//         <button type='submit'>ENTER</button>
//       </form>

//       <div>
//         {
//           subData && (
//             <div>
//               <h2>Form Submitted !!</h2>
//               <p>Name : {subData.name}</p>
//               <p>Mobile :+91 {subData.phn}</p>
//               <p>City : {subData.city}</p>
//             </div>
//           )
//         }
//       </div>
//     </div>
//   )
// }

// export default App





// //EVENT HANDLING USING  OBJECT DATA

// const App = () => {

//   const[formdata,setFormData]=useState({
//       name:"",
//       email:"",
//       pwd:"",
//   });

//   const[submittedData,setSubmittedData]=useState(null);

//   const handleChange=(e)=>{
//     setFormData({
//       ...formdata,
//       [e.target.name]:e.target.value,
//     })
//   }

//   const handleSubmit=(e)=>{
//     e.preventDefault();
//     setSubmittedData(formdata);

//     setFormData({
//       name:"",
//       email:"",
//       pwd:"",
//     })
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className='form'>

//          <input type="text" placeholder='Enter your Name'
//           name='name'
//           value={formdata.name}
//          onChange={handleChange} required /> <br></br>

//         <input type="email" placeholder='Enter your Email'
//           name='email'
//           value={formdata.email}
//          onChange={handleChange} required /> <br></br>

//         <input type="password" placeholder='ENter your paswword'
//           name='pwd'
//           value={formdata.pwd}
//           onChange={handleChange} required /> <br></br>

//         <button type="submit">Submit</button><br></br><br></br>
//       </form>

//       <div>
//         {
//           submittedData && (
//             <div>
//               <h2>Form Submitted..!!</h2>
//               <p>Name : {submittedData.name}</p>
//               <p>Email : {submittedData.email}</p>
//               <p>Password : {submittedData.pwd}</p>
//             </div>
//           )
//         }
//       </div>
//     </div>
//   )
// }

// export default App






//EVENT HANDLING USING MULTIPLE USE STATES

// const App = () => {

//   const[email,setEmail]=useState("");
//   const[pwd,setPwd]=useState("");

//   const[subEmail,setSubEmail]=useState("");
//   const[subPwd,setSubPwd]=useState("");

//   const handleForm=(e)=>{
//     e.preventDefault();

//     setSubEmail(email);
//     setSubPwd(pwd);
//   }

//   return (
//     <div>
//       <form onSubmit={handleForm}>
//         <input type="email" placeholder='Enter your Email'
//          onChange={(e)=>setEmail(e.target.value)} required /> <br></br>

//         <input type="password" placeholder='ENter your paswword'
//           onChange={(e)=>setPwd(e.target.value)} required /> <br></br>

//         <button type="submit">Submit</button><br></br><br></br>
//       </form>

//       <div>
//         {
//             subEmail && (
//               <div>
//                 <h3>Your Email: {subEmail}</h3>
//                 <h3>Your Password: {subPwd}</h3>
//               </div>
//             )
//         }
//       </div>
//     </div>
//   )
// }

// export default App





//EVENT HANDLING
// const App = () => {

//   const[name,setName]=useState("");
//   const[subName,setSubName]=useState("");

//   const handleSubmit=(e)=>{
//     e.preventDefault();
//     // console.log(`Submitted by: ${name}`);
//     setSubName(name);
//   }
  
//   return (
//    <div>
     
//      <form onSubmit={handleSubmit}>
//         <input type='text' placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}/>
//         <button type='submit'>Submit</button>
//      </form>

//      <h1>{subName}</h1>
     
//    </div>
//   )

// }

// export default App
