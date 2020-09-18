import React, { useState, useEffect } from "react";
import { Admin, Resource } from "react-admin";
import buildGraphQLProvider from "ra-data-graphql-simple";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { FirebaseAuthProvider } from "react-admin-firebase";
import VerticalAlignTopIcon from "@material-ui/icons/VerticalAlignTop";
import VerticalAlignCenterIcon from "@material-ui/icons/VerticalAlignCenter";
import VerticalAlignBottomIcon from "@material-ui/icons/VerticalAlignBottom";

import { TopVerseList, TopVerseCreate, TopVerseEdit } from "./admin/topVerse";
import {
  MiddleVerseList,
  MiddleVerseCreate,
  MiddleVerseEdit,
} from "./admin/middleVerse";
import {
  BottomVerseList,
  BottomVerseCreate,
  BottomVerseEdit,
} from "./admin/bottomVerse";
import LoginPage from "./LoginPage";
import firebaseconfig from "../firebaseConfig";
import theme from "../styles/theme";

const client = new ApolloClient({
  uri: process.env.REACT_APP_URI,
  cache: new InMemoryCache(),
});

const authProvider = FirebaseAuthProvider(firebaseconfig, {});

const App = () => {
  const [dataProvider, setDataProvider] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const provider = await buildGraphQLProvider({
          client,
        });

        setDataProvider(() => provider);
      } catch (error) {
        setError(true);
      }
    })();
  }, []);

  if (error) {
    return (
      <div className="loading">
        <h1>Internal Server Error</h1>
        <p>Try again in a few minutes</p>
      </div>
    );
  }

  if (!dataProvider)
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );

  return (
    <Admin
      loginPage={LoginPage}
      dataProvider={dataProvider}
      authProvider={authProvider}
      theme={theme}
    >
      <Resource
        name="TopVerse"
        options={{ label: "Primeiro verso" }}
        list={TopVerseList}
        create={TopVerseCreate}
        edit={TopVerseEdit}
        icon={VerticalAlignTopIcon}
      />
      <Resource
        name="MiddleVerse"
        options={{ label: "Segundo verso" }}
        list={MiddleVerseList}
        create={MiddleVerseCreate}
        edit={MiddleVerseEdit}
        icon={VerticalAlignCenterIcon}
      />
      <Resource
        name="BottomVerse"
        options={{ label: "Terceiro verso" }}
        list={BottomVerseList}
        create={BottomVerseCreate}
        edit={BottomVerseEdit}
        icon={VerticalAlignBottomIcon}
      />
    </Admin>
  );
};

export default App;
