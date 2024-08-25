//app/apis/page.js
"use client"
import React from "react";
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";
import LoginForm from "@/components/Githubapi";
import TicTacToe from "@/components/TicTacToe";
export default function Apis() {
  return (
    <div className="flex w-full flex-col">
      <Tabs disabledKeys={["music"]} aria-label="Disabled Options">
        <Tab key="github" title="Github">
          <Card>
            <CardBody>
              <LoginForm/>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="TicTacToe" title="TicTacToe">
          <Card>
            <CardBody>
            <TicTacToe/>  
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="Lol" title="Lol">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  
  );
}
