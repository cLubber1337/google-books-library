export type BooksResponse = {
  kind: string
  totalItems: number
  items: Book[]
}

type industryIdentifiers = {
  type: string
  identifier: string
}

type Book = {
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
}

export type BooksState = {
  searchValue: string
}
