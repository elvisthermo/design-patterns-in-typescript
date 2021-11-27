interface TelaFaxtory{
    createButton():Button;
    createCheckBox():Checkbox;
}


class Windows implements TelaFaxtory{
    createButton():Button {
        return new WindowsButton();
    }

    createCheckBox(): Checkbox {
        return new WindowsCheckbox();
    }
}

class Linux implements TelaFaxtory{
    createButton():Button {
        return new LinuxButton();
    }

    createCheckBox(): Checkbox {
        return new LinuxCheckBox();
    }
}

interface Button{
    render():string;
}

class WindowsButton implements Button{
    render(): string {
        return "windows button <button></button>";
    }
}

class LinuxButton implements Button{
    render(): string {
        return "linux button <button></button>";
    }

}

interface Checkbox{
    render():string;
}

class LinuxCheckBox implements Checkbox{
    render(): string {
       return "Linux checkbox <input type='checkbox'> ";
    }

}

class WindowsCheckbox implements Checkbox{
    render(): string {
        return "Windows checkbox <input type='checkbox'>";
    }

}

class Application{
    private button!: Button;
    
    constructor(private tela:TelaFaxtory){
        this.criarTela()
        
    }

    public criarTela():void{
        this.button = this.tela.createButton();
        console.log("tela criada!");
        
    }

    public paint():void{
        console.log( this.button.render());
        console.log("tela renderizada");
        

    }
}


function main():void{
    let applicationWin = new Application(new Windows());

    applicationWin.paint();

    let applicationLinux = new Application(new Linux());

    applicationLinux.paint();


}main();