import { categoriesData, sortingData } from '@/lib/data/options-select-data.ts'

export type BooksResponse = {
  kind: string
  totalItems: number
  items: Book[]
}

type industryIdentifiers = {
  type: string
  identifier: string
}

export type Book = {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: {
    title: string
    subtitle: string
    authors: string[]
    publishedDate: string
    description: string
    industryIdentifiers: industryIdentifiers[]
    readingModes: {
      text: boolean
      image: boolean
    }
    pageCount: number
    printType: string
    categories: string[]
    maturityRating: string
    allowAnonLogging: boolean
    contentVersion: string
    panelizationSummary: {
      containsEpubBubbles: boolean
      containsImageBubbles: boolean
    }
    imageLinks: {
      smallThumbnail: string
      thumbnail: string
    }
    language: string
    previewLink: string
    infoLink: string
    canonicalVolumeLink: string
  }
  saleInfo: {
    country: string
    saleability: string
    isEbook: boolean
  }
  accessInfo: {
    country: string
    viewability: string
    embeddable: boolean
    publicDomain: boolean
    textToSpeechPermission: string
    epub: {
      isAvailable: boolean
    }
    pdf: {
      isAvailable: boolean
    }
    webReaderLink: string
    accessViewStatus: string
    quoteSharingAllowed: boolean
  }
  searchInfo: {
    textSnippet: string
  }
}

export type GetBooksArgs = {
  search: string
  orderBy: 'relevance' | 'newest'
  maxResults: number
  startIndex: number
  loadMore: boolean
}

export type BooksState = {
  searchTrigger: boolean
  searchValue: string
  category: (typeof categoriesData)[number]
  sorting: (typeof sortingData)[number]
  loadMoreBooks: boolean
}
