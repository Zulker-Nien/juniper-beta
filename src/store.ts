import { makeAutoObservable } from "mobx";
import { createContext } from "react";

class Store {
  constructor() {
    makeAutoObservable(this);
  }
  
  show = true;
  design = false;
  loader = false;
  value = "";
  color = "#ffffff";
  drawer = false;

  setShow = () => {
    this.show = !this.show;
  };

  setDrawer = () => {
    this.drawer = true
  }

  closeDrawer = () => {
    if(this.drawer === true){
      this.drawer = false
    }
  }
  setColor = (color:string) => {
    this.color = color
  }
  setDesign = () => {
    this.design = true;
  }
  setLoader = () => {
    this.loader = !this.loader;
  }
  setValue = ()=>{
    this.value = this.value
  }


}
export default createContext(new Store());