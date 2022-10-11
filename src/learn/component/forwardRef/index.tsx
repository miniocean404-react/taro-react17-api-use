import { Text, View } from '@tarojs/components'
import { Component, forwardRef } from 'react'

function Son(props) {
	const { grandRef } = props
	return (
		<View>
			<View>forwardRef获取父子间元素</View>
			<Text ref={grandRef}>这个是想要获取元素</Text>
		</View>
	)
}

class Father extends Component<any, any> {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<View>
				<Son grandRef={this.props.grandRef} />
			</View>
		)
	}
}

// react不允许ref通过props传递，因为组件上已经有 ref 这个属性,在组件调和过程中，已经被特殊处理，
// forwardRef出现就是解决这个问题，把ref转发到自定义的forwardRef定义的属性上，让ref，可以通过props传递。
// 将指针传递

// 正常情况下 ref 是不能挂在到函数组件上的，因为函数组件没有实例，
// 但是 useImperativeHandle 为我们提供了一个类似实例的东西。
// 它帮助我们通过 useImperativeHandle 的第 2 个参数，所返回的对象的内容挂载到 父组件的 ref.current 上。

// forwardRef会创建一个React组件，这个组件能够将其接受的 ref 属性转发到其组件树下的另一个组件的 props 中。
const NewFather = forwardRef((props, ref) => {
	// {...props} 将参数解构一个个赋值为prop
	return <Father grandRef={ref} {...props} />
})

export class ForWardRef extends Component<any, any> {
	node: unknown

	constructor(props) {
		super(props)
	}

	componentDidMount() {
		console.log('ForWardRef', this.node)
	}

	render() {
		return (
			<>
				<View>
					<NewFather ref={(node) => (this.node = node)} />
				</View>
				<br />
			</>
		)
	}
}
