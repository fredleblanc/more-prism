Prism.languages.statamic = {
	statamic_comment: /{{#.*?#}}/ig,
	statamic_tag: {
		pattern: /{{\s*.*?\s*}}/g,
		inside: {
			variable: {
				pattern: /({{\s*)[a-z0-9_]+(?:\:[^\s]+)?/ig,
				lookbehind: true
			},
			parameter: /\s[a-z][^=]+/ig,
			value: {
				pattern: /(")[^\s][^"]+/ig,
				lookbehind: true
			},
			modifier: {
				pattern: /\|[^\s\|]+/ig,
				inside: {
					parameter: /\:[^\s\|]+/ig
				}
			}
		}
	},
	rest: Prism.languages.markup
};