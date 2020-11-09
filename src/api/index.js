import auth from '@api/actions/auth/auth'

import portfolio from '@api/actions/portfolio/portfolio'
import portfolioFilter from '@api/actions/portfolio/portfolio-filter'
import portfolioTechnology from '@api/actions/portfolio/portfolio-technology'

import posts from "@api/actions/posts/posts"
import postsFilter from "@api/actions/posts/posts-filter"
import postsCategories from "@api/actions/posts/posts-categories"
import postsTags from "@api/actions/posts/posts-tags"

import reviews from "@api/actions/reviews/reviews";

import letters from "@api/actions/letters/letters";

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
