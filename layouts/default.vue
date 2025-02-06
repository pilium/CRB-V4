<template lang="pug">
	.main-wrapper.f
		//- <SkipContent/>
		<pageHeader/>
		<NuxtPage/>
		<pageFooter/>
		//- <BlindPanel/>
</template>

<!-- <script>
import Header from '@/components/header/header';

export default {
	components: {
		Header,
		SkipContent: () => import('@/components/skipToMainContent'),
		BlindPanel: () => import('@/components/blindPanel'),
		Footer: () => import('@/components/footer/footer'),
	},
	head() {
		const canonical = `https://xn----8sbbffg6bfugcbry7d4i.xn--p1ai${this.$route.path
			.toLowerCase()
			.replace(/\/$/, '')}`;

		return {
			link: [{rel: 'canonical', href: canonical}],
		};
	},
};
</script> -->
