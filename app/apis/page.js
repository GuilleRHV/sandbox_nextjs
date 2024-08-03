//app/apis/page.js
"use client"
import React from "react";
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";
import LoginForm from "@/components/Githubapi";
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
        <Tab key="Datos" title="Datos">
          <Card>
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
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
