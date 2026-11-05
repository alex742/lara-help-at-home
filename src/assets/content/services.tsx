export type Service =
  | "Overview"
  | "Developmental editing"
  | "Copy-editing"
  | "Proofreading"
  | "Bespoke editorial support";

export const serviceContent: Record<Service, React.JSX.Element> = {
  Overview: (
    <>
      <span>
        There are three primary strands to what I offer as a freelance book
        editor, which follow the traditional editorial workflow used in the
        publishing industry: first, developmental editing; second, copy-editing;
        third, proofreading.
      </span>
      <br />
      <span>
        However, if you are an independent author, your needs may not fit into
        just one of these categories. Sometimes the copy-editing and
        proofreading stages will be combined into a proof-edit, or perhaps your
        copy-edit will include more heavy line editing than the usual.
      </span>
      <br />
      <span>
        I have experience working with many different genres across fiction and
        non-fiction in commercial publishing imprints.
      </span>
    </>
  ),
  "Developmental editing": (
    <>
      <span>
        A developmental edit tackles the macro elements of your writing – think
        plot, character development, pace, writing style, narrative voice. As I
        read and comment on your work, I will consider all of these areas, as
        well as any particular concerns, aims, or audiences you have in mind.
      </span>
      <br />
      <span>
        If you commission me for a developmental edit on your work, you can
        expect a detailed editorial letter with feedback and suggestions to help
        you make changes and further develop your work.
      </span>
      <br />
      <span>
        I can provide developmental editing for any genre of fiction, or for
        narrative non-fiction works.
      </span>
    </>
  ),
  "Copy-editing": (
    <>
      <span>
        A copy-edit gets right into the details of your writing, covering
        grammatical correctness, consistency in style and content, and
        readability. If required, I will also prepare your work for typesetting
        using tags or Word styles.
      </span>
      <br />
      <span>
        If you commission me to copy-edit your work, I will return your document
        to you with tracked changes showing all corrections and standardisations
        made, and with queries as comments on the document (these can also be
        provided as a separate query sheet). I will also provide a style sheet
        for your work, which can be used during any further editing (e.g. if you
        have a proofread after your copy-edit) to help continue to ensure
        consistency. That said, I can work to any of your personal stylistic
        preferences.
      </span>
      <br />
      <span>I can copy-edit all genres, fiction and non-fiction.</span>
    </>
  ),
  Proofreading: (
    <>
      <span>
        A proofread is the final touch-up of your work. This comes at the very
        end of the editorial process, once a work has been edited and typeset.
        It includes checking for grammatical correctness and consistency in
        style, as well as layout (for typeset materials).
      </span>
      <br />
      <span>
        If you commission me to proofread your work, I will return your document
        with all changes suggested using digital mark-up (be that as tracked
        changes in Word or mark-up on a PDF).
      </span>
      <br />
      <span>I can proofread all genres, fiction and non-fiction.</span>
    </>
  ),
  "Bespoke editorial support": (
    <>
      <span>
        Each of my three main services listed follow the traditional publishing
        process. However, if you are an independent author – perhaps looking to
        self-publish or preparing your work to enter a competition – your needs
        may be slightly different.
      </span>
      <br />
      <span>
        Reach out for a chat, or to let me know what you’re looking for, and we
        can discuss what kind of edit would be the best fit for you, your work,
        and any particular goals you have in mind.
      </span>
    </>
  ),
};
