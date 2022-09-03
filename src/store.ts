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
  layer = "";
  layerClicked = 0;

  setSelectLayer = (layer:string) => {
    this.layer = layer
  }
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
  setLayerClicked =(layerClicked:number) => {
    this.layerClicked = layerClicked
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
  
  
  
  torso = ""
  sleeves = ""
  setTorso = (torso:string) => {
    this.torso = torso
  }
  setSleeves = (sleeves:string) => {
    this.sleeves = sleeves
  }

}
export default createContext(new Store());