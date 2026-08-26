import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { uploadBook } from "../../services/reading.service";

const ALLOWED_TYPES = ["application/pdf", "application/epub+zip"];
const MAX_SIZE_MB = 50;

const UploadBookModal = ({ onClose, onUploaded }) => {
  const fileInputRef = useRef(null);

  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];

    if (!selected) return;

    if (!ALLOWED_TYPES.includes(selected.type)) {
      toast.error("Only PDF and EPUB files are allowed.");
      e.target.value = "";
      return;
    }

    if (selected.size > MAX_SIZE_MB * 1024 * 1024) {
      toast.error(`File must be under ${MAX_SIZE_MB}MB.`);
      e.target.value = "";
      return;
    }

    setFile(selected);

    if (!title) {
      setTitle(selected.name.replace(/\.[^/.]+$/, ""));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      toast.error("Please choose a file to upload.");
      return;
    }

    if (!title.trim() || !author.trim()) {
      toast.error("Title and author are required.");
      return;
    }

    const formData = new FormData();
    formData.append("book", file);
    formData.append("title", title.trim());
    formData.append("author", author.trim());
    formData.append("description", description.trim());

    if (coverImage.trim()) {
      formData.append("coverImage", coverImage.trim());
    }

    setSubmitting(true);

    try {
      const response = await uploadBook(formData);

      toast.success("Book uploaded successfully!");
      onUploaded(response.data.data);
      onClose();
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Failed to upload book."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Upload a Book</h2>
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          <div
            className="upload-dropzone"
            onClick={() => fileInputRef.current.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".epub,.pdf,application/epub+zip,application/pdf"
              onChange={handleFileChange}
              hidden
            />

            <span className="material-symbols-outlined">upload_file</span>

            <p>{file ? file.name : "Click to choose an EPUB or PDF file"}</p>
          </div>

          <label className="modal-field">
            <span>Title</span>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Book title"
            />
          </label>

          <label className="modal-field">
            <span>Author</span>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Author name"
            />
          </label>

          <label className="modal-field">
            <span>Cover Image URL (optional)</span>
            <input
              type="url"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              placeholder="https://example.com/cover.jpg"
            />
          </label>

          <label className="modal-field">
            <span>Description (optional)</span>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="A short description"
              rows={3}
            />
          </label>

          <div className="modal-actions">
            <button type="button" className="modal-btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="modal-btn-primary" disabled={submitting}>
              {submitting ? "Uploading..." : "Upload Book"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadBookModal;