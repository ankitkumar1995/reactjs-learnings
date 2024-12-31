import React from "react";
import ConstructorPattern from "./constructorPattern";
import SingletonPattern from "./singletonPattern";
import FactoryPattern from "./factoryPattern";
import PrototypePattern from "./prototypePattern";

const DesignPattern = () => {
  return (
    <div>
      DesignPattern
      <div>
        <div>
          1 Constructor Pattern
          <div>
            <ConstructorPattern />
          </div>
        </div>
        <div>
          2 Singleton Pattern
          <div>
            <SingletonPattern />
          </div>
        </div>
        <div>
          3 Factory Pattern
          <div>
            <FactoryPattern />
          </div>
        </div>
        <div>
          4 PrototypePattern
          <div>
            <PrototypePattern />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignPattern;
