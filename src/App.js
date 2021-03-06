function App() {
  return (
    <div>
      <header>
        <h1>Create and deploy react app on github pages</h1>
        <ul>
          <li>
            first create new folder for application, name it{" "}
            <b>'yourfoldername'</b>
          </li>
          <li>
            open command line, cd to <b>yourfoldername</b>
          </li>
          <li>
            use following command to create your application wich will use your
            folder name :
            <br />
            <code>npx create-react-app .</code>
          </li>
          <li>
            when command complited, run following comand to make sure that
            application created succesfully:
            <br />
            <code>npm start</code>
            <br />
            new page should appear in your default browser
          </li>
          <li>
            open that particular folder in visual studion code and apply your
            changes into it
          </li>
          <li>create new repository on github</li>
          <li>open terminal in vscode</li>
          <li>
            run following command:
            <br />
            <code>npm install gh-pages --save-dev</code>
          </li>
          <li>
            goto your package.json and edit it with adding following line
            <br />
            <code>"homepage": "http://yourgithubname/yourgithubreponame",</code>
            <br /> where, instead of "yourgithubname", provide your github name,
            and instead of "yourgithubreponame" provide your github repositorium
            name
          </li>
          <li>
            check devdependencies in your package.json, "gh-pages" should be
            there
          </li>
          <li>
            then add two new lines in scripts section:
            <br />
            <code>
              "predeploy": "npm run build",
              <br />
              "deploy": "gh-pages -d build",
            </code>
          </li>
          <li>save your changes</li>
          <li>
            then goto terminal, stop butch file executino by "ctrl c" and
            initialize your git:
            <br />
            <code>
              git init
              <br />
              git remote add origin
              https://github.com/yourgithubname/yourgithubreponame.git
            </code>
            <br />
            where, instead of "yourgithubname", provide your github name, and
            instead of "yourgithubreponame" provide your github repositorium
            name
          </li>
          <li>
            then:
            <br />
            <code>
              git add .<br />
              to stage all changes
            </code>
          </li>
          <li>
            then: <br />
            <code>git commit -m "here I commit all chages"</code>
            <br />
            to commit
          </li>
          <li>
            then we have to deploy:
            <br />
            <code>npm run deploy</code>
          </li>
          <li>
            so now you are done, just commit it into your github:
            <br />
            <code>git push -u origin master</code>
          </li>
          <li>
            now on github repositorium in settings tab find githubpages link
          </li>
          <li>enjoy</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
