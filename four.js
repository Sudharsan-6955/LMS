        // notewritting
        const noteInput = document.getElementById('noteInput');
        const saveBtn = document.getElementById('saveNote');
        const prevBtn = document.getElementById('prevNote');
        const charCount = document.getElementById('charCount');
        const boldBtn = document.getElementById('boldBtn');
        const italicBtn = document.getElementById('italicBtn');
        const codeBtn = document.getElementById('codeBtn');
        const listBtn = document.getElementById('listBtn');
        const styleSelect = document.getElementById('styleSelect');

        noteInput.addEventListener('input', () => {
            charCount.textContent = noteInput.value.length;
        });

        saveBtn.addEventListener('click', () => {
            localStorage.setItem('savedNote', noteInput.value);
            alert('Note saved da Baiyaa!');
        });

        prevBtn.addEventListener('click', () => {
            noteInput.value = localStorage.getItem('savedNote') || '';
            charCount.textContent = noteInput.value.length;
        });

        function wrapText(startTag, endTag) {
            let start = noteInput.selectionStart;
            let end = noteInput.selectionEnd;
            let text = noteInput.value;
            let selectedText = text.substring(start, end);
            let newText = text.substring(0, start) + startTag + selectedText + endTag + text.substring(end);
            noteInput.value = newText;
            charCount.textContent = noteInput.value.length;
        }

        boldBtn.addEventListener('click', () => wrapText('**', '**'));
        italicBtn.addEventListener('click', () => wrapText('*', '*'));
        codeBtn.addEventListener('click', () => wrapText('`', '`'));
        listBtn.addEventListener('click', () => wrapText('\n- ', ''));

        styleSelect.addEventListener('change', () => {
            let value = styleSelect.value;
            noteInput.value = value + "\n" + noteInput.value;
            charCount.textContent = noteInput.value.length;
        });



        document.addEventListener('DOMContentLoaded', function () {
            const sections = document.querySelectorAll('.section');
            const buttons = {
                overviewBtn: document.getElementById('overviewBtn'),
                topicsBtn: document.getElementById('topicsBtn'),
                notesBtn: document.getElementById('notesBtn')
            };

            function showSection(sectionId, activeBtn) {
                sections.forEach(section => {
                    section.classList.toggle('hidden', section.id !== sectionId);
                });
                Object.values(buttons).forEach(btn => {
                    btn.classList.toggle('text-xl', btn === activeBtn);
                    btn.classList.toggle('text-base', btn !== activeBtn);
                });
            }

            buttons.overviewBtn.addEventListener('click', () => showSection('overview', buttons.overviewBtn));
            buttons.topicsBtn.addEventListener('click', () => showSection('topics', buttons.topicsBtn));
            buttons.notesBtn.addEventListener('click', () => showSection('notes', buttons.notesBtn));

            // Initialize with the Overview section visible and its button enlarged
            showSection('overview', buttons.overviewBtn);
        });


        document.getElementById('seeMoreBtn').addEventListener('click', function () {
            const content = document.getElementById('extraContent');
            const buttonText = this.querySelector('span');
            const icon = this.querySelector('i');

            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                buttonText.textContent = 'See Less';
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                content.classList.add('hidden');
                buttonText.textContent = 'See More';
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
        document.getElementById('seeMoreBtn1').addEventListener('click', function () {
            const content = document.getElementById('extraContent1');
            const buttonText = this.querySelector('span');
            const icon = this.querySelector('i');

            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                buttonText.textContent = 'See Less';
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                content.classList.add('hidden');
                buttonText.textContent = 'See More';
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });