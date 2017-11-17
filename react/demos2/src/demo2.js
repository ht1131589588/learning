class Button extends React.Component{
    handClick(a,b,c){
        console.log(a);
        console.log(b);
        console.log(22,c);
    }
    render (){
        var id = 123;
        return (
            <div>
                <button onClick={(e)=>{this.handClick(e,id)}}>按钮</button>
                <button onClick={this.handClick.bind(this,id,1)}>按钮2</button>
            </div>
        )
    };
}