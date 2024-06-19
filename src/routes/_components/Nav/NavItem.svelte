<script lang="ts">
	let clazz: string = '';
	export { clazz as class };

	export let label: string;
	export let active: boolean = false;
	export let primary: boolean = false;
	export let href: string;

	$: background = primary ? 'bg-green-900' : active ? 'bg-primary/30' : '';
	$: fill = primary ? 'text-white' : 'text-neutral-900';
	$: flex = primary ? 'flex-[1.2]' : 'flex-1';
</script>

<li
	class="aspect-square flex items-center justify-center rounded-full {background} {fill} {flex} {clazz}"
>
	<a class="w-1/2 h-1/2" {href} aria-label={label} aria-current={active ? 'location' : undefined}>
		<slot />
	</a>
</li>
