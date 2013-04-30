<?php

namespace Sharp\Bundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('GtdBundle:Default:index.html.twig');
    }
}
