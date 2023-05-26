
export interface Database {
  public: {
    Tables: {
      ideas: {
        Row: {
          id: string,
          title: string,
          content: string,
          created_at: string,
          user_id: string,
        } // The data expected to be returned from a "select" statement.
        Insert: {
          title: string,
          content: string,
        } // The data expected passed to an "insert" statement.
        Update: {
          title: string,
          content: string,
        } // The data expected passed to an "update" statement.
      },
      settings: {
        Row: {
          id: string,
          user_id: string,
          view: boolean,
          theme: boolean,
        },
        Insert: {
          view: boolean,
          theme: boolean,
        },
        Update: {
          view: boolean,
        }
      }
    }
  }
}