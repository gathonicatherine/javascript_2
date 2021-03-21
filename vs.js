
foo();

function foo(){
    var a=1;

    function bar(){
        let b=2;

        function barz(){
         var c=3;
            console.log(a,b,c);
        }barz()
        console.log(b,c);
    }bar()
    console.log(b,a);
}