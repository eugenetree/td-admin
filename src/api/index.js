import auth from '@/js/api/actions/auth/auth'

import portfolio from '@/js/api/actions/portfolio/portfolio'
import portfolioFilter from '@/js/api/actions/portfolio/portfolio-filter'
import portfolioTechnology from '@/js/api/actions/portfolio/portfolio-technology'

import posts from "@/js/api/actions/posts/posts"
import postsFilter from "@/js/api/actions/posts/posts-filter"
import postsCategories from "@/js/api/actions/posts/posts-categories"
import postsTags from "@/js/api/actions/posts/posts-tags"

import reviews from "@/js/api/actions/reviews/reviews";

import letters from "@/js/api/actions/letters/letters";

export default {
	auth,

  portfolio,
	portfolioFilter,
	portfolioTechnology,

	posts,
	postsFilter,
	postsCategories,
	postsTags,

	reviews,

	letters
}
