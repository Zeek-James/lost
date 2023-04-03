export type NoteProps = {
  id: number;
  title: string;
  content: string;
};

export interface ErrorResponse {
  message: string;
}

export type NoteActionsProps = {
  onDelete: (id: number) => Promise<void>;
  onEdit: (id: number) => void;
};

export interface Edit {
  edit: boolean;
  editId: number | null;
}
