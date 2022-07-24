/*
 * componentKeys are mapped to the `component.id` for each template from:
 * https://www.figma.com/file/8eaX7wCNg7MpgPFXEqcaIA/%5BDON'T-USE%5D-Design-Templates?node-id=1%3A1929
 */

export type PAGE_DATA_TYPE = {
  pageName: string
  componentKey: string
  description: string
  displayPageName?: string
}

export type PAGES_TYPE = Record<string, PAGE_DATA_TYPE>

export const PAGES: PAGES_TYPE = {
  context: {
    pageName: '🌌 File cover ',
    componentKey: null,
    description:
      '',
  },
  designs: {
    pageName: '🚧 Designs',
    componentKey: null,
    description: '',
  },
  divider: {
    pageName: '--------------------',
    componentKey: null,
    description: 'A blank divider page.',
    displayPageName: '➗ Divider',
  },
  components: {
    pageName: '𝌤 Local Components',
    componentKey: null,
    description: 'A page to store all local components introduced in this project.',
  },
  research: {
    pageName: '🔎 Research',
    componentKey: null,
    description: '',
  },
  demo: {
    pageName: '😎 Show and Tell',
    componentKey: null,
    description: '',
  },
  divider2: {
    pageName: '--------------------',
    componentKey: null,
    description: 'A blank divider page.',
    displayPageName: '➗ Divider',
  },
  scratch: {
    pageName: '📂 Archive',
    componentKey: null,
    description: '',
  },
}

export const OTHER: PAGES_TYPE = {
  componentProposal: {

    pageName: 'Proposal for Aether UI Kit',
    componentKey: null,
    description:
      'Used when proposing a new component to the Aether. This generates a page in your file with the base template for submitting an idea.',
  },
}

// Should coorespond to the lowercase name of each object above, this just keeps things simple
export const TABS = ['pages', 'other']

// Generate cached "all selected" sets for each tab/category
export const ALL_SELECTED_PAGES = new Set()
Object.keys(PAGES).map((key) => {
  ALL_SELECTED_PAGES.add(key)
})


export const ALL_SELECTED_OTHER = new Set()
Object.keys(OTHER).map((key) => {
  ALL_SELECTED_OTHER.add(key)

})

// Quick way to get items per tab
export const getNewTabItems = (newTab: string) => newTab === 'pages' ? PAGES : OTHER
export const getAllSelectedForNewTab = (newTab: string) => newTab === 'pages' ? ALL_SELECTED_PAGES : ALL_SELECTED_OTHER