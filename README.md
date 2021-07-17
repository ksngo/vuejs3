
https://v3.vuejs.org/guide/component-props.html#passing-an-object

attributes, non-prop or prop, $attrs
1. know that the attributes in component tag are found in $attrs in the component instance if the attributes are not defined in the props option of the component. This is know as non-prop attribute. Hence, value in a non-prop attribute in component tag are accessible from $attrs.
2. for prop attribute in component tag, it must have been defined in the props option of the component and the prop will be directly accessible from the component instance(this) .
3. If the component has multiple root nodes in its template, in order to know which root node to place the attribute to, need to add v-bind="$attrs" to that node (e.g. &lt;div&gt;&lt;/div&gt;&lt;div v-bind="$attrs"&gt;&lt;/div&gt;), 

"" in tag
*  content between "" of tag are not string but treated as javascript expression

{{}} between opening tag and closing tag
* content between {{}} are javascript expression?

event, emits option,  $emit()
1. the @custom-event-name in component tag will point to the function (from the application instance), essentially passing the function from parent component to child component
2. the component instance should have the customEventName defined in its emits option (similar to props option when wanting a custom prop in component tag)
3. inside child component, we use $emit('customEventName') to fire the function

v-model
1. I think that if v-model is used in standard html tag, it will perform two way binding automatically?
2. But, if v-model is used in a custom Vue component tag, need to $emit('update:modelValue' , $event.target.value) and save to correspondong props option property modelValue?