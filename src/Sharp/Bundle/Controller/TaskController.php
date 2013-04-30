<?php

namespace Sharp\Bundle\Controller;

use Sharp\Bundle\Model\Task;
use Sharp\Bundle\Model\TaskQuery;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class TaskController extends Controller
{
    /**
     * @Rest\View
     */
    public function allAction()
    {
      $repository = $this->getDoctrine()
          ->getRepository('GtdBundle:Task');
      $tasks = $repository->findAll();

      return array('tasks' => $tasks);
    }

    /**
     * @Rest\View
     */
    public function getAction($id)
    {
        $repository = $this->getDoctrine()
            ->getRepository('GtdBundle:Task');
        $task = $repository->find($id);

        if (!$task instanceof Task) {
            throw new NotFoundHttpException('Task not found');
        }

        return array('task' => $task);
    }
}
