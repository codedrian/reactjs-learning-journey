import reactLogo from './assets/react.svg'
function Header() {
    return (
        <img src={reactLogo} alt="React logo"/>
    );
}
function ReactInfoList() {
	const reactInfo = [
			{fact: 'Was first released in 2013'},
			{fact: 'Was originally created by Jordan Walke'},
			{fact: 'Has well over 100k stars on GitHub'},
			{fact: 'Is maintained by Facebook'},
			{fact: 'Powers thousands of enterprises apps, including mobile apps'}
	]
	const reactInfoList = reactInfo.map((info, index) =>
		<li key={index}>{info.fact}</li>
	);
	return (
		<ul>{reactInfoList}</ul>
	);
}
export default function App() {

  return (
      <div>
          <Header />
          <ReactInfoList />
      </div>
  );
}
