const jsonData = [
   {
     name: "Baked Salmon",
     ingredients: [
       {
         name: "Salmon",
         amount: 1,
         measurement: "l lb"
       },
       {
         name: "Pine Nuts",
         amount: 1,
         measurement: "cup"
       },
       {
         name: "Butter Lettuce",
         amount: 2,
         measurement: "cups"
       },
       {
         name: "Yellow Squash",
         amount: 1,
         measurement: "med"
       },
       {
         name: "Olive Oil",
         amount: 0.5,
         measurement: "cup"
       },
       {
         name: "Garlic",
         amount: 3,
         measurement: "cloves"
       }
     ],
     steps: [
       "Preheat the oven to 350 degrees.",
       "Spread the olive oil around a glass baking dish.",
       "Add the salmon, garlic, and pine nuts to the dish.",
       "Bake for 15 minutes.",
       "Add the yellow squash and put back in the oven for 30 mins.",
       "Remove from oven and let cool for 15 minutes. Add the lettuce and serve."
     ]
   },
   {
     name: "Fish Tacos",
     ingredients: [
       {
         name: "Whitefish",
         amount: 1,
         measurement: "l lb"
       },
       {
         name: "Cheese",
         amount: 1,
         measurement: "cup"
       },
       {
         name: "Iceberg Lettuce",
         amount: 2,
         measurement: "cups"
       },
       {
         name: "Tomatoes",
         amount: 2,
         measurement: "large"
       },
       {
         name: "Tortillas",
         amount: 3,
         measurement: "med"
       }
     ],
     steps: [
       "Cook the fish on the grill until hot.",
       "Place the fish on the 3 tortillas.",
       "Top them with lettuce, tomatoes, and cheese."
     ]
   }
 ];
 
 function Heading({allData}) {
  return <div>
    <h1> Delicious Recpies </h1>
    {
      allData.map(p=> <DishName dish={p}/>)
    }
    </div>
 }
 
 function DishName({dish}){
   return <div>
     <h3>{dish.name}</h3>
     {
       dish.ingredients.map(i=> <Ingredients ingredient={i}/>)
     }
     <h2>Cooking Instructions</h2>
     <p>{dish.steps.map(s=> <Steps step={s}/>)}</p>
     
     </div>
 }
 
 function Ingredients({ingredient}){
   return <div>
     <ul>
       <li>{ingredient.name}</li>
     </ul>
     
     </div>
 }
 
 function Steps({step}){
   return <div>
     <dl>
       <dt>{step}</dt>
       </dl>
         
     </div>
     
 }
 
 ReactDOM.render(<Heading allData={jsonData} />, document.getElementById("app"));
 