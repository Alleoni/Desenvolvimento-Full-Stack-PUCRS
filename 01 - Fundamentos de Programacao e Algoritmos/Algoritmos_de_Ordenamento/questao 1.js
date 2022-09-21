function doSomething(value){
    if (value == 0)
    return 0;
    else 
    return value+doSomething(value-1);
}