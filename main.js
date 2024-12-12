// تحديد المتغيرات 

// let player1 = window.prompt()
// let player2 = window.prompt()
let title = document.querySelector('.title')
let squares=[];
let turn ='x';


function play(){
    let play =document.querySelector('.start').style.display='none';
    let game =document.querySelector('.game').style.display='block';

}


function end(num1,num2,num3){
    title.innerHTML = `${squares[num1]} is winner`;
    document.getElementById('item'+num1).style.color='green';
    document.getElementById('item'+num2).style.color='green';
    document.getElementById('item'+num3).style.color='green';
    setInterval(function(){title.innerHTML+='.'},1000)
    setTimeout(function ( ){location.reload()},3000);


}
function winner(){
   for (let i = 1; i < 10; i++) {
    
    squares[i]= document.getElementById('item'+i).innerHTML;
   }
   if(squares[1]==squares[2] && squares[2]==squares[3]&& squares[2]!=''){
    end(1,2,3)

}
  else if(squares[4]==squares[5] && squares[5]==squares[6]&& squares[5]!=''){
    end(4,5,6)
     
}
   else if(squares[7]==squares[8] && squares[8]==squares[9]&& squares[8]!=''){
    end(7,8,9)
   
}   
   else if(squares[1]==squares[4] && squares[4]==squares[7]&& squares[4]!=''){
    end(1,4,7)

}
   else if(squares[2]==squares[5] && squares[5]==squares[8]&& squares[5]!=''){
    end(2,5,8)

}
   else if(squares[3]==squares[6] && squares[6]==squares[9]&& squares[6]!=''){
    end(3,6,9)

}
   else if(squares[1]==squares[5] && squares[5]==squares[9]&& squares[5]!=''){
    end(1,5,9)

}
   else if(squares[3]==squares[5] && squares[5]==squares[7]&& squares[5]!=''){
    end(3,5,7)

}



}
function game (id){

    let element = document.getElementById(id);

    if(turn=== 'x' && element.innerHTML==''){
        element.innerHTML='X'
        turn = 'o'
        title.innerHTML="Player O's turn"
    }
    else if(turn === 'o' && element.innerHTML==''){
        element.innerHTML='O'
        turn = 'x'
        title.innerHTML="Player X's turn"
      
}
winner();
}