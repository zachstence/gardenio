<script>
	import { page } from '$app/stores';
	import NavItem from './NavItem.svelte';
	import { CalendarIcon, CreateIcon, DiaryIcon, DiscoverIcon, AccountIcon } from './icons';

	console.log($page.url.pathname);
</script>

<div class="px-3 pb-3">
	<ul class="flex flex-row items-center justify-between gap-4 rounded-full bg-primary/20 px-3 py-2">
		<NavItem label="Diary" href="/diary" active={$page.url.pathname.startsWith('/diary')}>
			<DiaryIcon />
		</NavItem>

		<NavItem label="Calendar" href="/calendar" active={$page.url.pathname.startsWith('/calendar')}>
			<CalendarIcon />
		</NavItem>

		<NavItem
			label="Create"
			href="/create"
			active={$page.url.pathname.startsWith('/create')}
			primary
		>
			<CreateIcon />
		</NavItem>

		<NavItem label="Discover" href="/discover" active={$page.url.pathname.startsWith('/discover')}>
			<DiscoverIcon />
		</NavItem>

		<NavItem label="Account" href="/account" active={$page.url.pathname.startsWith('/account')}>
			<AccountIcon />
		</NavItem>
	</ul>
</div>
