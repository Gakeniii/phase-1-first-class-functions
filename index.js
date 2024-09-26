
function receivesAFunction(callback){
    return callback();
    
};

function returnsANamedFunction(){
    return receivesAFunction;
};

// const returnsAnAnonymousFunction = () => function(){};
            //OR
const returnsAnAnonymousFunction = function(){return () => function(){}};
