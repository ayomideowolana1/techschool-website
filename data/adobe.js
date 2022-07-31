const { Module } = require("../data/struct");
let contentAvailable = true;
// duration:"",
// description:,

module.exports = [
  {
    contentAvailable,
    name: "Photoshop Fundamentals",
    url: "/images/adobe/photoshop.png",
    duration: "3 Days",
    description: `This course provides a thorough overview Adobe Photoshop CC through an ideal combination of instructor-led demonstration and hands-on practice.`,
    modules: [
      new Module(" Understanding How Digital Images Work", [
        " Understanding RGB and CMYK color models (additive and Subtractive)",
        " Image size Vs. Resolution - What's the difference?",
        " Pixel Aspect Ratio - Are all pixels square?",
        " Bits per channel - what does that mean?",
        " Alpha Channel - Why is this important to us?"
      ]),
      new Module(" Getting to Know the Work Area", [
        " Starting to work in Adobe Photoshop",
        " Using the tools",
        " Setting tool properties",
        " Undoing actions in Photoshop",
        " More about panels and panel locations",
        " Customizing the workspace",
        " Finding resources for using Photoshop"
      ]),
      new Module(" Working with Selections", [
        " About selecting and selection tools",
        " Using the Quick Selection tool",
        " Moving a selected area",
        " Manipulating selections",
        " Using the Magic Wand tool",
        " Selecting with the lasso tools",
        " Rotating a selection",
        " Selecting with the Magnetic Lasso tool",
        " Selecting from a center point",
        " Resizing and copying a selection",
        " Cropping an image"
      ]),
      new Module(" Layer Basics", [
        " About layers",
        " Using the Layers panel",
        " Rearranging layers",
        " Applying a gradient to a layer",
        " Applying a layer style",
        " Adding an adjustment layer",
        " Updating layer effects",
        " Adding a border",
        " Flattening and saving files"
      ]),
      new Module(" Basic Photo Corrections", [
        " Strategy for retouching",
        " Resolution and image size",
        " Straightening and cropping the image in Photoshop",
        " Adjusting the color and tone",
        " Using the Spot Healing Brush tool",
        " Using content-aware fill",
        " Repairing areas with the Clone Stamp tool",
        " Applying a content-aware patch",
        " Sharpening the image"
      ]),
      new Module(" Correcting and Enhancing Digital Photographs", [
        " Adjusting shadows and highlights",
        " Camera Shake Reduction",
        " Correcting red eye",
        " Correcting image distortion",
        " Adding depth of field",
        " Extending objects with the Content-Aware Move tool",
        " Adding interactive blur",
        " Photo Merge",
        " Auto-align layers",
        " Content-aware scaling",
        " Content-aware fill"
      ]),
      new Module(" Masks and Channels", [
        " Working with masks and channels",
        " Creating a mask",
        " Refining a mask",
        " Creating a quick mask",
        " Manipulating an image with Puppet Warp",
        " Working with channels"
      ]),
      new Module(" Typographic Design", [
        " About type",
        " Creating a clipping mask from type",
        " Creating type on a path",
        " Warping point type",
        " Designing paragraphs of type",
        " Working with type styles",
        " Adding a rounded rectangle",
        " Adding vertical text"
      ]),
      new Module(" Vector Drawing Techniques", [
        "  About bitmap images and vector graphics",
        "  About paths and the Pen tool",
        "  Using paths with artwork",
        "  Creating vector objects for the background",
        "  Working with defined custom shapes",
        "  Importing a Smart Object"
      ]),
      new Module(". Saving your files", [
        " Understanding file types",
        " The right file for the right job"
      ])
    ]
  },
  {
    contentAvailable,
    duration: "3 Days",
    name: "Adobe InDesign Fundamentals",
    description: `Adobe InDesign CC software works seamlessly with Adobe Photoshop and Adobe Illustrator, providing a single integrated-design environment that doesn't interrupt your creative process.
This course provides a thorough overview of the interface, tools, features, and tips for page layout and design using InDesign. The course is an ideal combination of instructor-led demonstration and hands-on practice.`,
    url: "/images/adobe/indesign.png",
    modules: [
      new Module("Introducing the Workspace", [
        "  Looking at the Workspace",
        "  Working with Panels",
        "  Customizing the Workspace",
        "  Navigating Through a Document",
        "  Using Context Menus"
      ]),
      new Module("Getting to Know InDesign", [
        "  Viewing Guides",
        "  Preflighting as You Work",
        "  Adding Text",
        "  Working with Styles",
        "  Working with Graphics",
        "  Working with Objects",
        "  Working with Object Styles",
        "  Viewing the Document in Presentation Mode"
      ]),
      new Module("Setting Up a Document and Working with Pages", [
        "  Creating and Saving Custom Document Settings",
        "  Creating a New Document",
        "  Switching Between Open InDesign Documents",
        "  Working with Master Pages",
        "  Applying Master Pages to Document Pages",
        "  Adding New Document Pages",
        "  Rearranging and Deleting Document Pages",
        "  Changing the Size of Pages",
        "  Adding Sections to Change Page Numbering",
        "  Overriding Master Page Items on Document Pages and Placing Text and Graphics",
        "  Viewing the Completed Spread"
      ]),
      new Module("Working with Objects", [
        "  Working with Layers",
        "  Creating and Modifying Text Frames",
        "  Creating and Modifying Graphics Frames",
        "  Adding Metadata Captions to Graphics Frames",
        "  Placing and Linking Graphics Frames",
        "  Changing the Shape of a Frame",
        "  Wrapping Text Around a Graphic",
        "  Modifying the Shape of Frames",
        "  Transforming and Aligning Objects",
        "  Selecting and Modifying Grouped Objects",
        "  Creating a QR Code",
        "  Finishing Up"
      ]),
      new Module("Flowing Text", [
        "  Flowing Text Into an Existing Frame",
        "  Flowing Text Manually",
        "  Creating Text Frames While Flowing Text",
        "  Flowing Text Automatically",
        "  Creating Threaded Frames Automatically",
        "  Resizing Text Frames Automatically",
        "  Adding a Jump Line Page Number"
      ]),
      new Module("Editing Text", [
        "  Finding and Changing a Missing Font",
        "  Entering and Importing Text",
        "  Finding and Changing Text and Formatting",
        "  Checking Spelling",
        "  Editing Text by Dragging and Dropping",
        "  Using the Story Editor",
        "  Tracking Changes"
      ]),
      new Module("Working with Typography", [
        "  Adjusting Vertical Spacing",
        "  Changing Fonts and Type Styles",
        "  Fine-Tuning Columns",
        "  Changing Paragraph Alignment",
        "  Creating a Drop Cap",
        "  Adjusting Letter and Word Spacing",
        "  Adjusting Line Breaks",
        "  Setting tabs",
        "  Adding a Rule Above a Paragraph"
      ]),
      new Module("Working with Color", [
        "  Managing Color",
        "  Synchronizing Color Settings in Adobe Bridge",
        "  Specifying Color Settings in InDesign",
        "  Displaying Images at Full Resolution",
        "  Proofing Colors Onscreen",
        "  Defining Printing Requirements",
        "  Creating and Applying Colors",
        "  Working with Gradients",
        "  Creating a Tint",
        "  Creating a Spot Color",
        "  Applying Colors to Text and Objects",
        "  Using Advanced Gradient Techniques"
      ]),
      new Module("Working with Styles", [
        "  Creating and Applying Paragraph Styles",
        "  Creating and Applying Character Styles",
        "  Nesting Character Styles Inside Paragraph Styles",
        "  Creating and Applying Object Styles",
        "  Creating and Applying Table and Cell Styles",
        "  Globally Updating Styles",
        "  Loading Styles from Another Document"
      ]),
      new Module(" Importing and Modifying Graphics", [
        "  Adding Graphics from Other Programs",
        "  Comparing Vector and Bitmap Graphics",
        "  Managing Links to Imported Files",
        "  Updating Revised Graphics",
        "  Adjusting Display Quality",
        "  Working with Clipping Paths",
        "  Working with Alpha Channels",
        "  Importing Native Adobe Graphics Files",
        "  Using a Library to Manage Objects",
        "  Using Adobe Bridge to Import Graphics"
      ]),
      new Module(" Printing and Exporting", [
        "  Preflighting Files",
        "  Packaging Files",
        "  Creating an Adobe PDF Proof"
      ])
    ]
  },
  {
    name: "Illustrator",
    url: "/images/adobe/illustrator.png",
    contentAvailable,
    duration: "3 Days",
    description: `In this course, you will get a thorough overview of the interface, tools, and features of Illustrator CC Adobe Illustrator CC, a design tool that is used to visually express ideas in print, on the web, and in any other medium.`,
    modules: [
      new Module(" Getting to Know the Work Area", [
        "  • Understanding the workspace",
        "  • Changing the view of artwork",
        "  • Navigating multiple artboards",
        "  • Arranging multiple documents",
        "  • Finding resources for using Illustrator"
      ]),
      new Module(" Selecting and Aligning", [
        "  • Selecting objects",
        "  • Aligning objects",
        "  • Working with groups",
        "  • Exploring object arrangement",
        "  • Hiding and locking objects"
      ]),
      new Module("Creating and Editing Shapes", [
        "  • Creating a new document",
        "  • Working with basic shapes",
        "  • Combining and editing shapes",
        "  • Using Image Trace to create shapes"
      ]),
      new Module(" Transforming Objects", [
        "  • Working with artboards",
        "  • Transforming content",
        "  • Transformation Tools",
        "  • Transformation Effects"
      ]),
      new Module(" Drawing with the Pen and Pencil Tools", [
        "  • Exploring the Pen tool",
        "  • Creating the ice cream illustration",
        "  • Drawing with the Pencil tool"
      ]),
      new Module(" Color and Painting", [
        "  • Understanding color",
        "  • Working with color",
        "  • Painting with patterns",
        "  • Working with Live Paint"
      ]),
      new Module(" Working with Type", [
        "  • Working with type",
        "  • Formatting type",
        "  • Creating and applying text styles",
        "  • Warping text",
        "  • Working with type on a path",
        "  • Wrapping text around an object",
        "  • Creating text outlines"
      ]),
      new Module(" Working with Layers", [
        "  • Creating layers",
        "  • Selecting and moving objects and layers",
        "  • Locking layers",
        "  • Viewing layers",
        "  • Pasting layers",
        "  • Creating a clipping mask",
        "  • Merging layers",
        "  • Locating layers",
        "  • Applying appearance attributes to layers",
        "  • Isolating layers"
      ]),
      new Module(" Blending Colors and Shapes", [
        "  • Working with gradients",
        "  • Working with blended objects"
      ]),
      new Module(" Working with Brushes", [
        "  • Working with brushes",
        "  • Using Calligraphic brushes",
        "  • Using Art brushes",
        "  • Using Bristle brushes",
        "  • Using Pattern brushes",
        "  • Working with the Blob Brush tool"
      ])
    ]
  },
  {
    contentAvailable,
    name: "Dreamweaver",
    url: "/images/adobe/dreamwaver.png",
    duration: "3",
    description: `Adobe Dreamweaver is a web design program that gives even the most amateur web designer the ability to create stunning web pages fairly quickly and easily. You don't have to know HTML or any other programming language to be able to use Dreamweaver. Like other WYSIWYG editors (What You See Is What You Get), you can simply type and paste text and other images onto the screen and let Dreamweaver write the code for you. 
Whether this is your first time using Dreamweaver or you've used it in the past, this course will walk you through the program step-by-step and teach you how to use its many features and options to create web pages.  
`,
    modules: [
      new Module("Course objectives", [
        "Create web pages using predesigned layouts or by creating your own",
        "Design web pages for mobile phones, tablets, and desktop computers",
        "Add text, mages, and other elements to your pages",
        "Embed or link to audio or video files from your page, including from YouTube, Vimeo, and SoundCloud",
        "Recognize and write basic HTML for your pages – even though you don't have to",
        "Create and use HTML tables",
        "Use CSS to apply styles to your pages and site, and also to create interactive features",
        "Add forms to your web pages for visitors to fill out",
        "Publish your website to the web",
        "And much more!"
      ]),
      new Module("Learning Outcomes", [
        "By successfully completing this course, students will be able to:",
        "Create a website. ",
        "Design websites with tables. ",
        "Create a website using a template. ",
        "Create online forms. ",
        "Create a website with frames. ",
        "Create rollovers. ",
        "Design with Cascading Style Sheets. ",
        "Add audio, video and Flash to a page. ",
        "Publish and manage your website. ",
        "Demonstrate mastery of lesson content at levels of 70% or higher."
      ])
    ]
  },
  {
    contentAvailable,
    description: `Adobe Acrobat is used to view, create, edit, and print PDF files, or Portable Document Format. Most computer users today are familiar with PDF files and the icon that's used to represent them. Users are also usually familiar with Adobe Reader, which is the program you can use for free to view and read PDF files. However, Reader cannot be used to edit and manipulate files like Adobe Acrobat.
This course will introduce new users to Adobe Acrobat, as well as update users of past versions to the latest generation of this amazing software.*   Anyone, regardless of experience level or computer knowledge, can successfully take and complete this course.   It will start from the beginning, teaching you how to navigate the program, then move forward with step-by-step instructions and examples to teach you how to use all the major features that Acrobat has to offer. 
`,
    name: "Acrobat",
    url: "/images/adobe/acrobat.png",
    duration: "",
    modules: [
      new Module("Course Objectives", [
        "Navigate your version of Acrobat to find all its menus and toolbars",
        "Create PDF documents from images, Office documents, and more.",
        "Create bookmarks, links, and other navigational tools.",
        "Edit PDF files that you've created – or ones that have already been created.",
        "Insert multimedia files such as movies and sound into PDF files.",
        "Turn scanned documents into searchable text. ",
        "Turn scanned documents into interactive forms.",
        "Create interactive forms from a PDF file.",
        "Create portfolios.",
        "And much, much more!",
        "",
        "",
        "The screenshots in this course will be based on Adobe Acrobat version 9, but course material will also be applicable to previous and future versions as well. It's not necessary that you have Adobe Acrobat 9 installed on your computer in order to complete and pass this course. However, it's helpful if you do have a version of Adobe Acrobat so that you can follow along with each lesson and practice what you learn.  "
      ]),

      new Module("Learning Outcomes", [
        "By successfully completing this course, students will be able to:",
        "Describe what Adobe Acrobat is. ",
        "Demonstrate navigating Adobe Acrobat, viewing a document, and creating basic PDF files. ",
        "Demonstrate saving and printing files in Adobe Acrobat. ",
        "Demonstrate manipulating, editing, and commenting PDF files. ",
        "Demonstrate the review process in Adobe Acrobat. ",
        "Demonstrate creating and managing forms in Adobe Acrobat. ",
        "Demonstrate inserting multimedia into PDF documents. ",
        "Demonstrate mastery of lesson content at levels of 70% or higher."
      ])
    ]
  },
  {
    duration: "3",
    contentAvailable,
    name: "Captivate",
    url: "/images/adobe/captivate.png",
    description:
      "This Introduction to Adobe Captivate training is a three – day course designed to teach the core Adobe Captivate skills needed to create interactive eLearning and mLearning content. By following step-by-step instructions, you will learn how to create a soft-skills lesson from scratch. You’ll learn to record and produce software demonstrations, and interactive training simulations. This Captivate course will take you through three e-learning projects: a demonstration, a simulation and a SCORM-compliant quiz. This three-day Introduction to Captivate is always followed in the same week by the 2-day intermediate Captivate Course - Beyond the Essentials. A practical working knowledge of Mac OS X or Windows Basic Web knowledge",
    modules: [
      new Module(
        "Introduction to Adobe Captivate Training - The Essentials Delivery Methods",
        [
          "Official Adobe training curriculumAttend online",
          " in person",
          " or bring this course to your facility"
        ]
      ),
      new Module(
        "Introduction to Adobe Captivate Training - The Essentials Delivery Methods",
        [
          "How to create a soft-skills lesson from scratchRecord and produce software demonstrations",
          " and interactive training simulations"
        ]
      ),
      new Module("Course Outline", [
        " Exploring CaptivateLesson",
        " New Project & Soft Skills eLearningLesson ",
        " Recording Demos and SimsLesson",
        " Captions",
        " Styles and TimingLesson ",
        " Images and Smart ShapesLesson",
        " Pointers",
        " Paths",
        " Boxes",
        " and ButtonsLesson ",
        " Rollovers and ZoomsLesson ",
        " AudioLesson ",
        " Video",
        " Animation and EffectsLesson ",
        " Adding InteractivityLesson ",
        " Working With PowerPointLesson ",
        " Introduction to Question SlidesLesson  Finishing Touche"
      ])
    ]
  }
];
