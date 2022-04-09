import Assignment3 from "../Assignment3"


function Assignment2(){
    var obj={
        for1div:{
            date: '28 march 2022',
            title: 'Pen',
            price: '$100',
        },
        for2div:{
            date: '27 march 2022',
            title: 'pencil',
            price: '$200',
        },
        for3div:{
            date: '22 march 2022',
            title: 'Car',
            price: '$500',
        },
    }
    return(
        <div>

            <Assignment3 date={obj.for1div.date} title={obj.for1div.title} price={obj.for1div.price}/>
            <Assignment3 date={obj.for2div.date} title={obj.for2div.title} price={obj.for2div.price}/>
            <Assignment3 date={obj.for3div.date} title={obj.for3div.title} price={obj.for3div.price}/>
        </div>
        
    )
}


export default Assignment2