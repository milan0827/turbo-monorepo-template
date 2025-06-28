import { add } from '@repo/science/add';

export default function Page() {
	const value = add(1, 2);
	console.log(value);
	return <div>Hello world</div>;
}
