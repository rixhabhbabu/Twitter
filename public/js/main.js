document.querySelectorAll("#create-post-form, #edit-post-form").forEach((form) => {
  const fileInput = form.querySelector('input[type="file"][name="images"]');
  const preview = form.querySelector(".compose-image-preview");
  const submitButton = form.querySelector('button[type="submit"]');
  const contentInput = form.querySelector('textarea[name="content"]');
  let previewUrls = [];
  let chosenFiles = [];

  const selectedFiles = () => chosenFiles;
  const maxNewFiles = () => {
    const existingCount = form.querySelectorAll(".edit-media-preview img").length;
    const removeExisting = Boolean(form.querySelector('input[name="removeMedia"]:checked'));
    return Math.max(0, 4 - (removeExisting ? 0 : existingCount));
  };
  const syncState = () => {
    if (!submitButton || !contentInput) return;
    const hasExistingMedia = Boolean(form.querySelector(".edit-media-preview img")) && !form.querySelector('input[name="removeMedia"]:checked');
    submitButton.disabled = !(contentInput.value.trim() || selectedFiles().length || hasExistingMedia);
  };

  const renderPreview = () => {
    previewUrls.forEach((url) => URL.revokeObjectURL(url));
    previewUrls = [];
    preview.replaceChildren();
    const files = selectedFiles();
    preview.hidden = files.length === 0;
    if (files.length) {
      const count = document.createElement("small");
      count.className = "compose-image-count";
      count.textContent = `${files.length} of ${maxNewFiles()} images selected`;
      preview.append(count);
    }

    files.forEach((file, index) => {
      const item = document.createElement("div");
      item.className = "compose-image-preview-item";
      const image = document.createElement("img");
      const url = URL.createObjectURL(file);
      previewUrls.push(url);
      image.src = url;
      image.alt = `Selected image ${index + 1}: ${file.name}`;
      const removeButton = document.createElement("button");
      removeButton.type = "button";
      removeButton.className = "compose-image-remove";
      removeButton.setAttribute("aria-label", `Remove ${file.name}`);
      removeButton.title = `Remove ${file.name}`;
      removeButton.textContent = "×";
      removeButton.addEventListener("click", () => {
        const transfer = new DataTransfer();
        chosenFiles = selectedFiles().filter((_selectedFile, selectedIndex) => selectedIndex !== index);
        chosenFiles.forEach((selectedFile) => {
          transfer.items.add(selectedFile);
        });
        fileInput.files = transfer.files;
        renderPreview();
        syncState();
      });
      item.append(image, removeButton);
      preview.append(item);
    });
  };

  fileInput.addEventListener("change", () => {
    const newlyPickedFiles = Array.from(fileInput.files ?? []);
    const uniqueFiles = [...chosenFiles, ...newlyPickedFiles].filter((file, index, all) =>
      all.findIndex((candidate) => candidate.name === file.name && candidate.size === file.size && candidate.lastModified === file.lastModified) === index,
    );
    const validFiles = uniqueFiles.filter((file) => file.type.startsWith("image/"));
    const limitedFiles = validFiles.slice(0, maxNewFiles());
    chosenFiles = limitedFiles;
    const transfer = new DataTransfer();
    limitedFiles.forEach((file) => transfer.items.add(file));
    fileInput.files = transfer.files;
    renderPreview();
    syncState();
  });

  contentInput?.addEventListener("input", syncState);
  form.querySelector('input[name="removeMedia"]')?.addEventListener("change", () => {
    chosenFiles = chosenFiles.slice(0, maxNewFiles());
    const transfer = new DataTransfer();
    chosenFiles.forEach((file) => transfer.items.add(file));
    fileInput.files = transfer.files;
    renderPreview();
    syncState();
  });
  renderPreview();
  syncState();
});
