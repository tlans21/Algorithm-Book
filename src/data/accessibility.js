export const accessibilityCollection = {
	
	name: "자료구조",
	areas: [
		{
			name: "초급 자료구조",
			skills: [
				{
		
					name: "탐색",
					description: {
						text: "완전탐색을 이용한 자료구조 문제",
						links: [
							["난이도 - 하, 최소 직사각형", "https://school.programmers.co.kr/learn/courses/30/lessons/86491"],
						]
					}
				},

				{
					name: "Screen Readers",
					description: {
						text: "Learn about assistive technology such as screen readers that reads sections of the page aloud based on the current focus.",
						links: [
							["The A11Y Project - Screen Reader Myths", "https://a11yproject.com/posts/people-who-use-screen-readers-dont-use-javascript/"],
							["The A11Y Project - NVDA Screen Reader", "https://a11yproject.com/posts/getting-started-with-nvda/"],
							["The A11Y Project - OS X Voiceover", "https://a11yproject.com/posts/getting-started-with-voiceover/"],
							["Webaim - Screen Reader Survey", "https://webaim.org/projects/screenreadersurvey7/"]
						]
					}
				},
				{
					name: "Accessibility tree",
					description: {
						text: "Learn about the accessibility tree and how assistive technology uses it.",
						links: [
							["Google Devs - The Accessibility Tree", "https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/the-accessibility-tree"]
						]
					},
					skills: [
						{
							name: "ARIA",
							description: {
								text: "Learn how to use ARIA descriptions an labels to help assistive technology understanding your website.",
								links: [
									["Google Devs - ARIA Labels", "https://developers.google.com/web/fundamentals/accessibility/semantics-aria/aria-labels-and-relationships"],
									["Google Devs - Hiding and updating content", "https://developers.google.com/web/fundamentals/accessibility/semantics-aria/hiding-and-updating-content"],
									["The A11Y Project - ARIA States", "https://a11yproject.com/posts/ARIA-states/"],
									["The A11Y Project - ARIA Properties", "https://a11yproject.com/posts/ARIA-properties/"],
								]
							}
						},
						{
							name: "Accessible HTML",
							description: {
								text: "Learn how to write HTML in such as way that assistive technology better understands it.",
								links: [
									["Google Devs - Introduction to Semantics", "https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/"],
									["MDN - Accessibility HTML", "https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML"],
									["Webaim - Skip navigation", "https://webaim.org/techniques/skipnav/"],
									["w3c - Headings", "https://www.w3.org/WAI/tutorials/page-structure/headings/"],
									["Freecodecamp - Semantic Elements", "https://guide.freecodecamp.org/html/html5-semantic-elements/"]
								]
							},
							skills: [
								{
									name: "Alt text",
									description: {
										text: "Learn how to use the alt attribute to provide a useful text alternative to this image.",
										links: [
											["Google Devs - Text Alternatives for Images", "https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/text-alternatives-for-images"],
											["Webaim - Accessible Images", "https://webaim.org/techniques/images/"],
											["Webaim - Alternative text", "https://webaim.org/techniques/alttext/"],
										]
									}
								}
							]
						},
						{
							name: "Accessible CSS",
							description: {
								text: "Learn how to write CSS in such as way that assistive technology better understands it.",
								links: [
									["Webaim - CSS", "https://webaim.org/techniques/css/"]
								]
							}
						},
					]
				},
				{
					name: "Accessible forms",
					description: {
						text: "Learn how to build accessible forms that makes it usable to as many people as possible.",
						links: [
							["Webaim - Forms", "https://webaim.org/techniques/forms/"],
							["Itnext - Form Accessibility Gudie", "https://itnext.io/form-accessibility-a-practical-guide-4062b7e2dd14"]
						]
					}
				},
				{
					name: "UI States",
					description: {
						text: "Learn how to make the state of each UI element clear.",
						links: [
							["Google Devs - Accessible Styles", "https://developers.google.com/web/fundamentals/accessibility/accessible-styles"]
						]
					}
				},
				{
					name: "Keyboard Accessibility",
					description: {
						text: "Learn how to make it easy for keyboard users to navigate your site.",
						links: [
							["Webaim - Keyboard", "https://webaim.org/techniques/keyboard/"],
							["Smashing Magazine - Web with just a keyboard", "https://www.smashingmagazine.com/2018/07/web-with-just-a-keyboard/"]
						]
					},
					skills: [
						{
							name: "Focus",
							description: {
								text: "Learn how to create a sensible tab order and how to make it easy for the users to locate the currently focused element.",
								links: [
									["web.dev - Control focus with tabindex", "https://web.dev/control-focus-with-tabindex/"],
									["Google Devs - Focus", "https://developers.google.com/web/fundamentals/accessibility/focus/"],
									["Google Devs - Dom Order Matters", "https://developers.google.com/web/fundamentals/accessibility/focus/dom-order-matters"],
									["Google Devs - Using Tabindex", "https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex"],
									["Google Devs - Track Focus", "https://developers.google.com/web/tools/chrome-devtools/accessibility/focus"],
									["MDN - :focus-visible", "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible"],
									["MDN - :focus-within", "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within"]
								]
							}
						}
					]
				},
				{
					name: "Accessible Colors",
					description: {
						text: "Learn how to select colors in such a way that users, including those with visual disabilities, can perceive the content on the page.",
						links: [
							["Webaim - Contrast and Color", "https://webaim.org/articles/contrast/"],
							["The A11Y Project - Check contrast", "https://a11yproject.com/posts/check-contrast-with-mobile-device/"],
							["The A11Y Project - What is color contrast?", "https://a11yproject.com/posts/what-is-color-contrast/"],
							["Designing accessible color systems", "https://stripe.com/en-dk/blog/accessible-color-systems"],
						]
					}
				},
				{
					name: "Laws & Policies",
					description: {
						text: "Learn about the governmental policies related to web accessibility.",
						links: [
							["W3C - Laws & Policies", "https://www.w3.org/WAI/policies/"],
							["Webaim - Laws around the world", "https://webaim.org/articles/laws/world/"],
							["Webaim - Section 508", "https://webaim.org/standards/508/checklist"],
							["Webaim - WCAG 2 Checklist", "https://webaim.org/standards/wcag/checklist"],
							["A11Y.dev - Lawsuits", "https://a11y.dev/470-digital-accessibility-cases-were-filed-in-q3-2018/"],
						]
					},
					skills: [
						{
							name: "Audits",
							description: {
								text: "Learn how to conduct an accessibility review to improve the overall experience of using your site. Remember, good accessibility equals good UX!",
								links: [
									["web.dev - Accessibility audits", "https://web.dev/lighthouse-accessibility"],
									["Google Devs - How to review", "https://developers.google.com/web/fundamentals/accessibility/how-to-review"],
									["Webaim - Accessibility Tools", "https://webaim.org/articles/tools/"],
									["Google Devs - Accessibility Reference", "https://developers.google.com/web/tools/chrome-devtools/accessibility/reference"],
									["Webaim - Wave", "http://wave.webaim.org/"],
									["Google Chrome - NoCoffee Extension", "https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl"],
									["Digital A11Y - Accessibility Plugins", "https://www.digitala11y.com/accessibility-plug-ins-ie-chrome-firefox-browsers/"],
									["Google Devs - Accessibility for teams", "https://developers.google.com/web/fundamentals/accessibility/a11y-for-teams"],
									["WCAG 2.0 checklists", "https://www.wuhcag.com/wcag-checklist/"],
									["How to Meet WCAG (Quick Reference)", "https://www.w3.org/WAI/WCAG21/quickref/"],
								]
							}
						}
					]
				}
			]
		},
		{
			name: "중급 자료구조",
			skills: [
				{	name: "시뮬레이션",
					description: {
						text: "시뮬레이션 문제입니다.",
						links: [
							["난이도 - 중, ZOAC 3", "https://www.acmicpc.net/problem/20436"],
							["난이도 - 중, 지구 온난화", "https://www.acmicpc.net/problem/5212"],
							["난이도 - 상, 톱니바퀴", "https://www.acmicpc.net/problem/14891"],
							["난이도 - 상, 감시", "https://www.acmicpc.net/problem/15683"]
						]
					}
				},
				{
					name: "투 포인터",
					description: {
						text: "Learn what the CSS box model means.",
						links: [
							["난이도 - 중, 배열 합치기", "https://www.acmicpc.net/problem/11728"],
							["난이도 - 상, 두 용액", "https://www.acmicpc.net/problem/2470"],
							["난이도 - 중상, 겹치는건 싫어", "https://www.acmicpc.net/problem/20922"],
						]
					},
				},
				/*{
					name: "Overflow",
					description: {
						text: "Learn about what happens when there is too much content to be contained comfortably inside a box and how to manage it.",
						links: [
							["MDN - Overflowing content", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Overflowing_content"],
							["W3Schools - CSS Layout: Overflow", "https://www.w3schools.com/css/css_overflow.asp"],
							["Overflow In CSS", "https://ishadeed.com/article/overflow-css/"]
						]
					},
				},*/
				{
					name: "분할 정복",
					description: {
						text: "분할 정복 문제입니다.",
						links: [
							["난이도 - 중, 색종이 만들기", "https://www.acmicpc.net/problem/2630"],
							["난이도 - 중, 쿼드 트리", "https://www.acmicpc.net/problem/1992"],
							["난이도 - 중, Z", "https://www.acmicpc.net/problem/1074"],
						]
					},
				},
				{
					name: "문자열",
					description: {
						text: "문자열 문제입니다.",
						links: [
							["난이도 - 하, 경고", "https://www.acmicpc.net/problem/3029"],
							["난이도 - 중, 단어 정렬", "https://www.acmicpc.net/problem/1181"],
							["난이도 - 중, 비밀번호 발음하기", "https://www.acmicpc.net/problem/4659"]
						]
					},
				},
				{
					name: "누적합",
					description: {
						text: "누적합 문제입니다.",
						links: [
							["난이도 - 하, 2차원 배열의 합", "https://www.acmicpc.net/problem/2167"],
							["난이도 - 중, 귀찮아 (SIB)", "https://www.acmicpc.net/problem/14929"],
							["난이도 - 중, 점수 따먹기", "https://www.acmicpc.net/problem/1749"],
							["난이도 - 상, 나누기", "https://www.acmicpc.net/problem/21757"],
						]
					},
				}
			]
		},
		{
			name: "고급 자료구조",
			skills: [
				{	
					name: "백트레킹",
					description: {
						text: "백트레킹 기법을 사용한 문제",
						links: [
							["난이도 - 중, N과 M (1)", "https://www.acmicpc.net/problem/15649"],
							["난이도 - 상, 줄어드는 수", "https://www.acmicpc.net/problem/1174"],
							["난이도 - 상, N-Queen", "https://www.acmicpc.net/problem/9663"],
							/* ["You might not need jQuery", "http://youmightnotneedjquery.com/"],*/
						]
					}
				},
				{
					name: "다익스트라 알고리즘",
					description: {
						text: "다익스트라 알고리즘",
						links: [
							["난이도 - 상, 특정 거리의 도시 찾기", "https://www.acmicpc.net/problem/18352"],
							["난이도 - 상, 알고스팟", "https://www.acmicpc.net/problem/1261"],
							["난이도 - 상, 최단 경로", "https://www.acmicpc.net/problem/1753"],
							["난이도 - 상, 인터넷 설치", "https://www.acmicpc.net/problem/1800"],
						]
					},
				},
				{
					name: "DFS",
					description: {
						text: "DFS, 깊이 우선탐색입니다.",
						links: [
							["난이도 - 상, 트리", "https://www.acmicpc.net/problem/1068"],
							["난이도 - 중, 전쟁 - 전투", "https://www.acmicpc.net/problem/1303"],
							["난이도 - 상, 트리의 지름", "https://www.acmicpc.net/problem/1167"],
							["난이도 - 상, 노드 사이의 거리", "https://www.acmicpc.net/problem/1240"],
							["난이도 - 상, 미친 로봇", "https://www.acmicpc.net/problem/1405"]
						]
					}
				},
				{
					name: "BFS",
					description: {
						text: "BFS, 너비 우선탐색",
						links: [
							["난이도 - 상, 조각 움직이기", "https://www.acmicpc.net/problem/1035"],
							["난이도 - 상, 교환", "https://www.acmicpc.net/problem/1039"],
							["난이도 - 상, 달이 차오른다, 가자", "https://www.acmicpc.net/problem/1194"],
							["난이도 - 상, 농장 관리", "https://www.acmicpc.net/problem/1245"],
							["난이도 - 상, 노드사이의 거리", "https://www.acmicpc.net/problem/1240"],
							["난이도 - 상, 소트게임", "https://www.acmicpc.net/problem/1327"],
						]
					}
				},
				{
					name: "위상 정렬",
					description: {
						text: "위상 정렬 문제",
						links: [
							["난이도 - 상, 작업", "https://www.acmicpc.net/problem/2056"],
							["난이도 - 상, 줄 세우기", "https://www.acmicpc.net/problem/2252"],
							["난이도 - 상, 음악 프로그램", "https://www.acmicpc.net/problem/2623"],
						]
					}
				},
				{
					name: "플로이드 워셜",
					description: {
						text: "플로이드 워셜 문제입니다.",
						links: [
							["난이도 - 중, 친구", "https://www.acmicpc.net/problem/1058"],
							["난이도 - 상, 역사", "https://www.acmicpc.net/problem/1613"],
							["난이도 - 상, 운동", "https://www.acmicpc.net/problem/1956"],
						]
					}
				}
			]
		}
	]
};