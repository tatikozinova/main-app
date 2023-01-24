import { useState } from 'react';
import {data} from './data';
import './App.css';

function App() {
  const[items, setItems] = useState(0);
  
  const [showMore, setShowMore]=useState(false);
  const [showText, setShowText]=useState(false);

  const {id, product, image, description} = data[items];

  const removeItem=(id)=>{
    let newSkincare=items.filter(item=>item.id !==id);
    setItems (newSkincare)
  }

const showTextClick=(item)=>{
  item.showMore=!item.showMore
  setShowText(!showText)
}

const previousItem =()=>{
setItems ((item=>{
item --;
if (item>0){
  return data.length -1;
}
return item;
}))
}

const nextItem =()=>{
  setItems ((item=>{
    item ++;
    if (item>data.length -1){
      item=0;
    }
    return item;
  }))
}

return(
  <div>
    <div className='container'>
      <h1>{items.length} products of my current skincare</h1>
    </div>
  

  <div className='container'>
    <img src={image} width='300px' alt='skincare'/>
  </div>

<div className='container'>
  <h2>{id}. {product}</h2>
</div>

<div className='container'>
  <h2>{description}</h2>
</div>

<div className='btn container'>
<button onClick ={previousItem}>Previous</button>
<button onClick={nextItem}>Next</button>
</div>

<div className='container'>
  <button onClick={()=>removeItem(id)}>Remove</button>
</div>

<div className='container'>
  <button onClick={()=>setItems([])}>Delete all</button>
</div>

</div>
)
}

export default App;
